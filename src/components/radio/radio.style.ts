import { tv } from "tailwind-variants";

export const radioStyle = tv({
  slots: {
    host: ["antialiased font-sans flex flex-col  items-start justify-start w-full relative"],
    base: ["flex flex-row items-center justify-start gap-2 group/base cursor-pointer text-color-default"],
    inputElement: ["radio sr-only"],
    radio: ["rounded-full bg-color-base border border-color-default"],
    radioDot: ["text-color-transparent transition-all ease-in-out scale-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"],
  },
  variants: {
    checked: {
      true: {
        radioDot: ["scale-100 text-color-primary"],
        radio: ["border-color-primary"],
      },
    },
    focus: {
      true: {
        radio: "ring-2 ring-offset-2 z-[1] border-color-primary",
      },
      false: [""],
    },
    readonly: {
      true: {
        base: ["cursor-default"],
        radio: ["bg-color-base", "border-color-disabled"],
      },
    },
    disabled: {
      true: {
        base: ["cursor-not-allowed text-color-disabled"],
        radio: ["bg-color-disabled", "border-color-disabled"],
      },
    },
    size: {
      sm: {
        host: ["text-sm gap-1.5"],
        radio: ["w-4 h-4"],
        radioDot: ["text-[8px] leading-[8px]"],
      },
      md: {
        host: ["text-base gap-2"],
        radio: ["w-4.5 h-4.5"],
        radioDot: ["text-[10px] leading-[10px]"],
      },
      lg: {
        host: ["text-lg gap-2.5"],
        radio: ["w-5 h-5"],
        radioDot: ["text-[12px] leading-[12px]"],
      },
    },
  },
  compoundVariants: [
    {
      disabled: false,
      readonly: false,
      checked: false,
      class: {
        radio: ["group-hover/base:bg-color-base-hover", "group-active/base:bg-color-base-pressed"],
      },
    },
    {
      disabled: false,
      readonly: false,
      checked: true,
      class: {
        radio: ["group-hover/base:bg-color-invert-primary-hover", "group-active/base:bg-color-invert-primary-pressed"],
      },
    },

    {
      readonly: true,
      checked: true,
      class: {
        radio: [],
        radioDot: ["text-color-default"],
      },
    },
    {
      disabled: true,
      checked: true,
      class: {
        radio: [],
        radioDot: ["text-color-disabled"],
      },
    },
  ],
  defaultVariants: {
    disabled: false,
    readonly: false,
    checked: false,
    size: "md",
  },
});
