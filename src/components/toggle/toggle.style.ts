import { tv } from "tailwind-variants";

export const toggleStyle = tv({
  slots: {
    host: ["antialiased font-sans text-base flex flex-col gap-1 items-start justify-start w-full relative"],
    base: ["flex flex-row items-center justify-start gap-2 group/base cursor-pointer text-color-default"],
    inputElement: ["sr-only"],
    toggle: ["w-12 h-6 rounded-full bg-color-invert-default border border-transparent"],
    toggleText: [""],
    toggleDot: ["absolute top-1 left-1 w-4 h-4 rounded-full bg-color-base transform transition-all duration-300", "text-[8px] leading-[8px] flex items-center justify-center"],
  },
  variants: {
    focus: {
      true: {
        toggle: "ring-2 ring-offset-2 z-[1]",
      },
      false: [""],
    },
    error: {
      true: {
        toggle: [""],
      },
      false: [""],
    },

    checked: {
      true: {
        toggle: ["bg-color-primary"],
        toggleDot: ["translate-x-6 text-color-primary"],
      },
      false: {
        toggleDot: ["text-color-caption"],
      },
    },
    textPosition: {
      left: {
        toggleText: ["order-0"],
      },
      right: {
        toggleText: ["order-2"],
      },
    },
    readonly: {
      true: {
        base: ["cursor-default"],
        toggle: ["bg-color-base border-color-default"],
        toggleDot: ["bg-color-invert-default"],
      }
    },
    disabled: {
      true: {
        base: ["cursor-not-allowed text-color-disabled"],
        toggle: ["bg-color-disabled text-color-disabled"],
      }
    },
  },
  compoundVariants: [
    
    {
      disabled: false,
      readonly: false,
      class: {
        toggleDot: ["group-active/base:w-5"],
        toggle: ["group-hover/base:bg-color-invert-default-hover", "group-active/base:cursor-grabbing", "group-active/base:bg-color-invert-default-pressed"],
      },
    },
    {
      disabled: false,
      readonly: false,
      checked: true,
      error: false,
      class: {
        toggle: ["group-hover/base:bg-color-primary-hover", "group-active/base:bg-color-primary-pressed"],
      },
    },
    {
      error: true,
      class: {
        toggle: ["bg-color-error", "group-hover/base:bg-color-error-hover", "group-active/base:bg-color-error-pressed"],
      },
    },
    {
      disabled: false,
      readonly: false,
      checked: true,
      class: {
        toggleDot: ["group-active/base:translate-x-5"],
      },
    },
  ],
  defaultVariants: {
    focus: false,
    error: false,
    disabled: false,
    readonly: false,
    checked: false,
    textPosition: "right",
  },
});
