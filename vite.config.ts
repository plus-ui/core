import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const _COMPONENTS = [
  "./src/components/index.ts",
  "./src/base/plus-base.ts",
  "./src/model/plus.ts",
  "./src/model/plus-types.ts",
  "./src/components/avatar/avatar.component.ts",
  "./src/components/badge/badge.component.ts",
  "./src/components/button/button.component.ts",
  "./src/components/link/link.component.ts",
  "./src/components/divider/divider.component.ts",
  "./src/components/chip/chip.component.ts",
  "./src/components/alert/alert.component.ts",
  "./src/components/text/text.component.ts",
  "./src/components/button-group/button-group.component.ts",
  "./src/components/input/input.component.ts",
  "./src/components/textarea/textarea.component.ts",
  "./src/components/checkbox/checkbox.component.ts",
  "./src/components/radio/radio.component.ts",
  "./src/components/breadcrumb/breadcrumb.component.ts",
  "./src/components/breadcrumb-item/breadcrumb-item.component.ts",
  "./src/components/toggle/toggle.component.ts",
  "./src/components/radio-group/radio-group.component.ts",
  "./src/components/tab/tab.component.ts",
  "./src/components/tab/tab-group.component.ts",
  "./src/components/tab/tab-panel.component.ts",
  "./src/components/progress/progress.component.ts",
  "./src/components/rating/rating.component.ts",
  "./src/components/loading/loading.component.ts",
  "./src/components/checkbox-group/checkbox-group.component.ts",
];

export default defineConfig({
  build: {
    lib: {
      entry: [..._COMPONENTS],
      name: "plusui",
      formats: ["es"],
      fileName(_, entryName) {
        return `${entryName}.js`;
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
});
