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
        divider: "src/components/divider/divider.component.ts",
        chip: "src/components/chip/chip.component.ts",
        alert: "src/components/alert/alert.component.ts",
        text: "src/components/text/text.component.ts",
        buttonGroup: "src/components/button-group/button-group.component.ts",
        checkbox: "src/components/checkbox/checkbox.component.ts",
        input: "src/components/input/input.component.ts",
        textarea: "src/components/textarea/textarea.component.ts",
        radio: "src/components/radio/radio.component.ts",
        breadcrumb: "src/components/breadcrumb/breadcrumb.component.ts",
        breadcrumItem: "src/components/breadcrumb-item/breadcrumb-item.component.ts",
        toggle: "src/components/toggle/toggle.component.ts",
        radioGroup: "src/components/radio-group/radio-group.component.ts",
        tab: "src/components/tab/tab.component.ts",
        tabGroup: "src/components/tab/tab-group.component.ts",
        tabPanel: "src/components/tab/tab-panel.component.ts",
        progress: "src/components/progress/progress.component.ts",
        rating: "src/components/rating/rating.component.ts",
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
