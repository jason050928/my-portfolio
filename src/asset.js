// Prefix a path under public/ with the deploy base, so "/images/x.jpg" works
// both locally ("/") and on GitHub Pages ("/my-portfolio/"). Vite rewrites
// imports and index.html on its own; strings in profile.js need this.
export function asset(path) {
  if (!path) return path;
  return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
}
