import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    outDir: "dist/client",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        program: resolve(__dirname, "program.html"),
        venue: resolve(__dirname, "venue.html")
      }
    }
  }
});
