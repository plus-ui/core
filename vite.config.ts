import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "src/components/index.ts",
        avatar: "src/components/avatar/avatar.component.ts",
        badge: "src/components/badge/badge.component.ts",
        ["styles/badge.style"]: "src/components/badge/badge.style.ts",
        button: "src/components/button/button.component.ts",
        ["assets/base"]: "src/base/plus-base.ts",
        ["helpers/color-helper"]: "src/helper/color-helper.ts",
        link: "src/components/link/link.component.ts",
      },
      output: {
        format: "es",
        entryFileNames: "[name].js",
        chunkFileNames: "assets/[name].js",
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
