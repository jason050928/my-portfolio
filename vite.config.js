import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Never watch build output written inside the project. A watcher racing
      // a build here throws EBUSY on Windows and kills the dev server.
      ignored: ["**/dist/**", "**/ssr-out/**"],
    },
  },
});
