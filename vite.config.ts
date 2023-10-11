import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "src/components/index.ts",
        avatar: "src/components/avatar/avatar.component.ts",
        badge: "src/components/badge/badge.component.ts",
        base: "src/base/plus-base.ts",
      },
      output: {
        format: "es",
        entryFileNames: "[name].js",
      }
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      outDir: "types",
      tsconfigPath: "tsconfig.json",
    }),
  ],
});
