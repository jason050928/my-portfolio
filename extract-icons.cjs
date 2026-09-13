const si = require("simple-icons");
const fs = require("fs");

// Display name -> candidate simple-icons export keys (first match wins).
// Anything not resolvable here is drawn by hand in techIcons.jsx instead.
const wanted = {
  JavaScript: ["siJavascript"],
  TypeScript: ["siTypescript"],
  React: ["siReact"],
  "Next.js": ["siNextdotjs"],
  "Node.js": ["siNodedotjs"],
  Python: ["siPython"],
  Django: ["siDjango"],
  GraphQL: ["siGraphql"],
  PostgreSQL: ["siPostgresql"],
  MySQL: ["siMysql"],
  MongoDB: ["siMongodb"],
  PHP: ["siPhp"],
  Laravel: ["siLaravel"],
  Redis: ["siRedis"],
  Docker: ["siDocker"],
  Terraform: ["siTerraform"],
};

// Some official colours are unusable on a dark surface, or belong to a
// different product than the label we show.
const colorOverrides = {
  // Next.js's mark is pure black; a neutral slate reads on both themes.
  "Next.js": "#6B7A90",
  // Django's official green is too dark for the dark theme.
  Django: "#2BA977",
};

const entries = [];
const missing = [];

for (const [name, keys] of Object.entries(wanted)) {
  const key = keys.find((candidate) => si[candidate]);

  if (!key) {
    missing.push(name);
    continue;
  }

  entries.push({
    name,
    color: colorOverrides[name] ?? `#${si[key].hex}`,
    path: si[key].path,
  });
}

const body = entries
  .map(
    (icon) =>
      `  ${JSON.stringify(icon.name)}: {\n` +
      `    color: ${JSON.stringify(icon.color)},\n` +
      `    path: ${JSON.stringify(icon.path)},\n` +
      `  },`,
  )
  .join("\n");

const file = `// GENERATED FILE — do not edit by hand.
// Official Simple Icons brand glyphs (CC0), extracted with extract-icons.cjs.
// Marks Simple Icons does not ship (AWS, OpenAI) are drawn in techIcons.jsx.
export const brandIcons = {
${body}
};
`;

fs.writeFileSync(process.argv[2], file, "utf8");

console.log(`wrote ${entries.length} icons -> ${process.argv[2]}`);
console.log("missing: " + (missing.length ? missing.join(", ") : "none"));
