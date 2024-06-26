import { tv } from "tailwind-variants";

export const inputStyle = tv({
  slots: {
    host: ["font-sans antialiased flex flex-col  items-start justify-start w-full relative"],
    base: [""],
    inputElement: ["focus:outline-none flex-1 w-full bg-transparent"],
    inputWrapper: [
      "input-wrapper flex flex-row items-center justify-start flex-1 w-full cursor-text",
      "placeholder-color-placeholder",
      "rounded border border-color-default bg-color-base",
      "hover:border-color-primary",
      "text-color-default",
    ],
    prefix: ["flex flex-row items-center justify-start"],
    suffix: ["flex flex-row items-center justify-start"],
    clearButton: ["cursor-pointer flex flex-row items-center justify-center hover:text-color-caption"],
  },
  variants: {
    focus: {
      true: {
        inputWrapper: "ring-2 ring-offset-2 z-[1] border-color-primary",
      },
      false: [""],
    },
    error: {
      true: {
        inputWrapper: ["border-color-error hover:border-color-error"],
      },
      false: [""],
    },
    disabled: {
      true: {
        inputWrapper: ["border-color-disabled cursor-not-allowed bg-color-disabled text-color-disabled hover:border-color-disabled"],
        inputElement: ["cursor-not-allowed text-color-disabled placeholder:text-color-disabled"],
      },
      false: {
        host: ["cursor-text"],
      },
    },
    readonly: {
      true: {
        inputWrapper: ["bg-color-default border-color-default text-color-default pointer-events-none"],
        inputElement: ["cursor-default text-color-default placeholder:text-color-default pointer-events-none"],
      },
      false: {
        host: "",
      },
    },
    isSelect: {
      true: {},
      false: {},
    },
    size: {
      sm: {
        host: ["gap-0.5"],
        inputWrapper: ["py-2 px-2 text-sm"],
        inputElement: [""],
        prefix: ["pr-2"],
        suffix: ["pl-2"],
        clearButton: [" w-5 h-5"],
      },
      md: {
        host: ["gap-1"],
        inputWrapper: ["py-2 px-3 text-base"],
        inputElement: [""],
        prefix: ["pr-2.5"],
        suffix: ["pl-2.5"],
        clearButton: [" w-5 h-5"],
      },
      lg: {
        host: ["gap-1.5"],
        inputWrapper: ["py-2 px-4 text-lg"],
        inputElement: [""],
        prefix: ["pr-3"],
        suffix: ["pl-3"],
        clearButton: [" w-5 h-5"],
      },
    },
  },
  compoundVariants: [
    {
      error: true,
      focus: true,
      class: {
        inputWrapper: ["border-color-error"],
      },
    },
    {
      isSelect: true,
      disabled: false,
      readonly: false,
      class: {
        inputWrapper: ["cursor-pointer"],
        inputElement: ["cursor-pointer"],
      },
    },
  ],
  defaultVariants: {
    focus: false,
    error: false,
    disabled: false,
    size: "md",
    isSelect: false,
  },
});
