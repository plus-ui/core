import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "vite";
import summary from "rollup-plugin-summary";

export default defineConfig({
  build: {
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: "index.ts",
        avatar: "src/components/avatar/avatar.component.ts",
        badge: "src/components/badge/badge.component.ts",
      },
      output: {
        dir: "dist",
        entryFileNames: "[name].js",
        chunkFileNames: "chunk/[name].js",
        assetFileNames: "[name].[ext]"
      },
      plugins: [
        typescript({
          tsconfig: "tsconfig.json"
        }),
        summary()
      ]
    }
  },
});
