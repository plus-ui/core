import { tv } from "tailwind-variants";

export const toggleStyle = tv({
  slots: {
    host: ["antialiased font-sans  flex flex-col items-start justify-start w-full relative"],
    base: ["flex flex-row items-center justify-start group/base cursor-pointer text-color-default"],
    inputElement: ["sr-only"],
    toggle: [" rounded-full bg-color-invert-default border border-transparent"],
    toggleText: [""],
    toggleDot: ["absolute  rounded-full bg-color-base transform transition-all duration-300", "flex items-center justify-center"],
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
        toggleDot: ["text-color-primary"],
      },
      false: {
        toggleDot: ["text-color-caption"],
      },
    },
    alignment: {
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
      },
    },
    disabled: {
      true: {
        base: ["cursor-not-allowed text-color-disabled"],
        toggle: ["bg-color-disabled text-color-disabled"],
      },
    },
    size: {
      sm: {
        host: "text-sm gap-0.5",
        base: "",
        toggle: "w-10 h-5",
        toggleDot: "top-1 left-1 w-3 h-3 text-[6px] leading-[6px] group-active/base:w-4",
      },
      md: {
        host: "text-base  gap-1 ",
        base: "gap-2 ",
        toggle: "w-12 h-6",
        toggleDot: "top-1 left-1 w-4 h-4 text-[8px] leading-[8px] group-active/base:w-5 ",
      },
      lg: {
        host: "text-lg gap-1.5",
        base: "",
        toggle: "w-14 h-7",
        toggleDot: "top-1 left-1 w-5 h-5 text-[10px] leading-[10px] group-active/base:w-6",
      },
    },
  },
  compoundVariants: [
    {
      checked: true,
      size: "sm",
      class: {
        toggleDot: ["translate-x-5"],
      },
    },
    {
      checked: true,
      size: "md",
      class: {
        toggleDot: ["translate-x-6"],
      },
    },
    {
      checked: true,
      size: "lg",
      class: {
        toggleDot: ["translate-x-7"],
      },
    },

    {
      disabled: false,
      readonly: false,
      class: {
        toggleDot: [""],
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
      size: "sm",
      class: {
        toggleDot: ["group-active/base:translate-x-4"],
      },
    },
    {
      disabled: false,
      readonly: false,
      checked: true,
      size: "md",
      class: {
        toggleDot: ["group-active/base:translate-x-5"],
      },
    },
    {
      disabled: false,
      readonly: false,
      checked: true,
      size: "lg",
      class: {
        toggleDot: ["group-active/base:translate-x-6"],
      },
    },
  ],
  defaultVariants: {
    focus: false,
    error: false,
    disabled: false,
    readonly: false,
    checked: false,
    alignment: "right",
    size: "md",
  },
});
