import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
  return {
    server: { open: true, port: 9001 },
    plugins: [
      svgr(),
      react(),
      checker({ eslint: { lintCommand: "eslint src" }, overlay: false })
    ],
    publicDir: "public",
    resolve: {
      alias: {
        "@shikshak": path.resolve(__dirname, "src")
      }
    }
  };
});
