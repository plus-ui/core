
import vue from '@vitejs/plugin-vue';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default {
  build: {
    rollupOptions: {
      // Ensures no deps are bundled with build.
      // Source paths are expected to start with `./` or `/` but may be
      // `x:` on Windows.
      external: (id: string) => !id.match(/^((\w:)|(\.?[\\/]))/),
      input: [
        './src/base/PlusBase.vue', './src/components/accordion/AccordionGroupComponent.vue', './src/components/accordion/AccordionHeaderComponent.vue', './src/components/accordion/AccordionPanelComponent.vue', './src/components/accordion/AccordionComponent.vue', './src/components/alert/AlertComponent.vue', './src/components/avatar/AvatarComponent.vue', './src/components/badge/BadgeComponent.vue', './src/components/breadcrumb/BreadCrumbComponent.vue', './src/components/button/ButtonComponent.vue', './src/components/button-group/ButtonGroupComponent.vue', './src/components/checkbox/CheckboxComponent.vue', './src/components/checkbox-group/CheckboxGroupComponent.vue', './src/components/chip/ChipComponent.vue', './src/components/default/DefaultComponent.vue', './src/components/divider/DividerComponent.vue', './src/components/drawer/DrawerComponent.vue', './src/components/dropdown/DropDownItemComponent.vue', './src/components/dropdown/DropdonwMenuComponent.vue', './src/components/dropdown/DropdownComponent.vue', './src/components/input/InputComponent.vue', './src/components/link/LinkComponent.vue', './src/components/loading/LoadingComponent.vue', './src/components/modal/ModalComponent.vue', './src/components/popconfirm/PopconfirmComponent.vue', './src/components/popover/PopoverComponent.vue', './src/components/progress/ProgressComponent.vue', './src/components/radio/RadioComponent.vue', './src/components/radio-group/RadioGroupComponent.vue', './src/components/rating/RatingComponent.vue', './src/components/select/SelectOptionComponent.vue', './src/components/select/SelectOptionsComponent.vue', './src/components/select/SelectComponent.vue', './src/components/sticky-box/StickyBoxComponent.vue', './src/components/tab/TabGroupComponent.vue', './src/components/tab/TabPanelComponent.vue', './src/components/tab/TabComponent.vue', './src/components/text/TextComponent.vue', './src/components/textarea/textareaComponent.vue', './src/components/toast/ToastContainerComponent.vue', './src/components/toast/ToastComponent.vue', './src/components/toggle/ToggleComponent.vue', './src/components/tooltip/TooltipComponent.vue', './src/services/FloatingService.vue', './src/services/StickyService.vue', './src/utils/FloatingUI.vue'
      ],
      preserveEntrySignatures: "strict",
      output: {
        format: 'es',
        entryFileNames: ({ name }) => `${name}.js`,
        dir: './',
        sourcemap: true,
        preserveModules: true,
			  preserveModulesRoot: 'src',
      }
    },
    outDir: './'
  },
  plugins: [vue(), typescript()],
};