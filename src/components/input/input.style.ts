import { tv } from "tailwind-variants";

export const inputStyle = tv({
  slots: {
    host: ["font-sans antialiased flex flex-col gap-1 items-start justify-start w-full relative"],
    base: [""],
    inputElement: ["focus:outline-none flex-1 px-1 w-full"],
    inputWrapper: [
      "flex flex-row items-center justify-start flex-1 w-full",
      "placeholder-color-placeholder",
      "py-2 px-1 rounded border border-color-default bg-color-base",
      "hover:border-color-primary",
      "text-base text-color-default",
    ],
    prefix: ["flex flex-row items-center justify-start pl-1"],
    suffix: ["flex flex-row items-center justify-start pr-1"],
    clearButton: ["cursor-pointer flex flex-row items-center justify-center w-5 h-5 hover:text-color-caption"],
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
        inputWrapper: ["border-color-disabled bg-color-disabled text-color-disabled hover:border-color-disabled"],
      },
      false: {
        host: ["cursor-text"],
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
  ],
  defaultVariants: {
    focus: false,
    error: false,
    disabled: false,
  },
});
