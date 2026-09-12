// Screenshot a page for the projects grid, over the Chrome DevTools Protocol.
//
//   node scripts/capture.mjs <url> <outPath> [waitMs]
//
// Why not `chrome --screenshot`? That waits for the load event, and some sites
// never fire one — it hangs forever. This waits a fixed time instead, then
// crops to the top 600px and scales to 1200x500 in a single CDP call. The crop
// is deliberate: it cuts the cookie banners that sit lower on most pages.
//
// Set CHROME_PATH if Chrome is not at the default Windows location.

import { spawn } from "node:child_process";
import { writeFileSync, mkdtempSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [url, outPath, waitArg] = process.argv.slice(2);

if (!url || !outPath) {
  console.error("usage: node scripts/capture.mjs <url> <outPath> [waitMs]");
  process.exit(2);
}

const waitMs = Number(waitArg ?? 12000);

const CHROME =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

if (!existsSync(CHROME)) {
  console.error(`Chrome not found at ${CHROME} — set CHROME_PATH.`);
  process.exit(2);
}

const VIEWPORT = { width: 1440, height: 900 };
const CROP_HEIGHT = 600;
const OUT_WIDTH = 1200;

const PORT = 9333 + Math.floor(Math.random() * 400);
const userDataDir = mkdtempSync(join(tmpdir(), "capture-"));

const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${userDataDir}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-gpu",
    "--hide-scrollbars",
    `--window-size=${VIEWPORT.width},${VIEWPORT.height}`,
    "about:blank",
  ],
  { stdio: "ignore" },
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function debuggerUrl() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      const body = await response.json();
      if (body.webSocketDebuggerUrl) return body.webSocketDebuggerUrl;
    } catch {
      // port not open yet
    }
    await sleep(500);
  }

  throw new Error("Chrome never opened its debugging port");
}

let socket;
let exitCode = 0;

try {
  socket = new WebSocket(await debuggerUrl());

  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = () => reject(new Error("could not attach to Chrome"));
  });

  let nextId = 1;
  const pending = new Map();

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    const entry = pending.get(message.id);
    if (!entry) return;

    pending.delete(message.id);
    if (message.error) entry.reject(new Error(message.error.message));
    else entry.resolve(message.result);
  };

  const send = (method, params = {}, sessionId, timeoutMs = 60000) => {
    const id = nextId++;

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(id);
        reject(new Error(`${method} timed out after ${timeoutMs}ms`));
      }, timeoutMs);

      pending.set(id, {
        resolve: (value) => {
          clearTimeout(timer);
          resolve(value);
        },
        reject: (error) => {
          clearTimeout(timer);
          reject(error);
        },
      });

      socket.send(JSON.stringify({ id, method, params, sessionId }));
    });
  };

  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", {
    targetId,
    flatten: true,
  });

  await send("Page.enable", {}, sessionId);
  await send(
    "Emulation.setDeviceMetricsOverride",
    { ...VIEWPORT, deviceScaleFactor: 1, mobile: false },
    sessionId,
  );

  // Deliberately not awaited — this is the call that hangs on some sites.
  send("Page.navigate", { url }, sessionId).catch(() => {});
  await sleep(waitMs);

  const { data } = await send(
    "Page.captureScreenshot",
    {
      format: "jpeg",
      quality: 86,
      captureBeyondViewport: true,
      clip: {
        x: 0,
        y: 0,
        width: VIEWPORT.width,
        height: CROP_HEIGHT,
        scale: OUT_WIDTH / VIEWPORT.width,
      },
    },
    sessionId,
  );

  const buffer = Buffer.from(data, "base64");
  writeFileSync(outPath, buffer);

  console.log(`captured ${url} -> ${outPath} (${Math.round(buffer.length / 1024)} KB)`);
  console.log("Check the image — bot walls and cookie banners screenshot too.");
} catch (error) {
  console.error(`FAILED ${url}: ${error.message}`);
  exitCode = 1;
} finally {
  try {
    socket?.close();
  } catch {
    // already closed
  }
  chrome.kill();
}

process.exit(exitCode);
