import { tv } from "tailwind-variants";

export const checkboxStyle = tv({
  slots: {
    host: ["antialiased font-sans font-normal flex flex-col  items-start justify-start w-full relative gap-0.5"],
    base: ["flex flex-row items-center justify-start gap-2 group/base cursor-pointer text-color-default w-max py-2 border border-transparent"],
    inputElement: ["checkbox sr-only"],
    checkbox: ["rounded bg-color-base border border-color-default"],
    checkIcon: ["text-color-transparent transition-all ease-in-out scale-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"],
    textSlot: [],
    error: [],
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
    error: {
      true: {
        checkbox: ["border-color-error"],
      },
    },
    size: {
      sm: {
        host: ["text-sm "],
        checkbox: ["w-4 h-4"],
        checkIcon: ["text-[8px] leading-[8px]"],
      },
      md: {
        host: ["text-base"],
        checkbox: ["w-4.5 h-4.5"],
        checkIcon: ["text-[10px] leading-[10px]"],
      },
      lg: {
        host: ["text-lg "],
        checkbox: ["w-5 h-5"],
        checkIcon: ["text-[12px] leading-[12px]"],
      },
    },
    required: {
      true: { textSlot: "after:content-['*'] after:text-color-default after:ml-0.5" },
      false: "",
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
      checked: false,
      error: true,
      class: {
        checkbox: ["group-hover/base:bg-color-invert-error-hover", "group-active/base:bg-color-invert-error-pressed"],
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
      disabled: false,
      readonly: false,
      checked: true,
      error: true,
      class: {
        checkbox: ["border-color-error bg-color-error group-hover/base:bg-color-error-hover", "group-active/base:bg-color-error-pressed"],
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
    required: false,
    error: false,
  },
});
