import { tv } from "tailwind-variants";

export const checkboxStyle = tv({
  slots: {
    host: ["antialiased font-sans flex flex-col  items-start justify-start w-full relative"],
    base: ["flex flex-row items-center justify-start gap-2 group/base cursor-pointer text-color-default"],
    inputElement: ["checkbox sr-only"],
    checkbox: ["rounded bg-color-base border border-color-default"],
    checkIcon: ["text-color-transparent transition-all ease-in-out scale-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"],
  },
  variants: {
    checked: {
      true: {
        checkIcon: ["scale-100 text-color-base"],
        checkbox: ["border-color-primary bg-color-primary"],
      },
    },
    focus: {
      true: {
        checkbox: "ring-2 ring-offset-2 z-[1] border-color-primary",
      },
      false: [""],
    },
    readonly: {
      true: {
        base: ["cursor-default"],
        checkbox: ["bg-color-base", "border-color-disabled"],
      },
    },
    disabled: {
      true: {
        base: ["cursor-not-allowed text-color-disabled"],
        checkbox: ["bg-color-disabled", "border-color-disabled"],
      },
    },
    size: {
      sm: {
        host: ["text-sm gap-1.5"],
        checkbox: ["w-4 h-4"],
        checkIcon: ["text-[8px] leading-[8px]"],
      },
      md: {
        host: ["text-base gap-2"],
        checkbox: ["w-4.5 h-4.5"],
        checkIcon: ["text-[10px] leading-[10px]"],
      },
      lg: {
        host: ["text-lg gap-2.5"],
        checkbox: ["w-5 h-5"],
        checkIcon: ["text-[12px] leading-[12px]"],
      },
    },
  },
  compoundVariants: [
    {
      disabled: false,
      readonly: false,
      checked: false,
      class: {
        checkbox: ["group-hover/base:bg-color-base-hover", "group-active/base:bg-color-base-pressed"],
      },
    },
    {
      disabled: false,
      readonly: false,
      checked: true,
      class: {
        checkbox: ["group-hover/base:bg-color-primary-hover", "group-active/base:bg-color-primary-pressed"],
      },
    },

    {
      readonly: true,
      checked: true,
      class: {
        checkbox: [],
        checkIcon: ["text-color-default"],
      },
    },
    {
      disabled: true,
      checked: true,
      class: {
        checkbox: [],
        checkIcon: ["text-color-disabled"],
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
