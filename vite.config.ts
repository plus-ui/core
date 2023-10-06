import { defineConfig } from "vite";
import summary from "rollup-plugin-summary";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "src/components/index.ts",
        avatar: "src/components/avatar/avatar.component.ts",
        badge: "src/components/badge/badge.component.ts",
      },
      output: {
        format: "es",
        entryFileNames: "[name].js",
      },
      external: ["lit-element"],
    },
    lib: {
      entry: {
        index: "src/components/index.ts",
        avatar: "src/components/avatar/avatar.component.ts",
        badge: "src/components/badge/badge.component.ts",
      },
      formats: ["es"],
    },
  },
  plugins: [
    summary(),
    dts({
      rollupTypes: true,
      outDir: "types",
      tsconfigPath: "tsconfig.json",
    }),
  ],
});
