import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // "/" locally; the deploy workflow sets BASE_PATH to "/<repo>/" for
  // GitHub Pages project sites.
  base: process.env.BASE_PATH ?? "/",
  plugins: [react()],
  server: {
    watch: {
      // Never watch build output written inside the project. A watcher racing
      // a build here throws EBUSY on Windows and kills the dev server.
      ignored: ["**/dist/**", "**/ssr-out/**"],
    },
  },
});
