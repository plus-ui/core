import { tv } from "tailwind-variants";

export const popconfirmStyle = tv({
  slots: {
    base: ["plus-popconfirm font-sans antialiased", " max-w-96", "absolute top-0 left-0 z-50 hidden"],
    descriptionClass: [""],
    titleClass: ["font-medium flex gap-2 items-center"],
    arrowClass: ["arrow absolute w-3 h-3 bg-color-default rotate-45 rounded-sm z-auto shadow-md z-[-1]"],

    contentClass: ["flex flex-col gap-2.5"],
    footerClass: ["flex justify-end gap-2"],
    wrapperClass: ["flex flex-col gap-5 p-5 rounded bg-color-default text-color-default "],
    prefixIconClass: ["text-color-primary"],
  },
  variants: {
    size: {
      sm: {
        base: [""],
        descriptionClass: ["text-xs"],
        titleClass: ["text-sm"],
        contentClass: [""],
        footerClass: [""],
        wrapperClass: ["p-3"],
      },
      md: {
        base: [""],
        descriptionClass: ["text-sm"],
        titleClass: ["text-base"],
        contentClass: [""],
        footerClass: [""],
        wrapperClass: ["p-3.5"],
      },
      lg: {
        base: [""],
        descriptionClass: ["text-base"],
        titleClass: ["text-lg"],
        contentClass: [""],
        footerClass: [""],
        wrapperClass: ["p-4"],
      },
    },
    available: {
      true: {
        base: ["shadow-md"],
      },
      false: {
        base: [],
      },
    },
    status: {
      default: [""],
      success: {
        prefixIconClass: ["text-color-success"],
      },
      warning: {
        prefixIconClass: ["text-color-warning"],
      },
      error: {
        prefixIconClass: ["text-color-error"],
      },
      info: {
        prefixIconClass: ["text-color-info"],
      },
      primary: {
        prefixIconClass: ["text-color-primary"],
      },
      attention: {
        prefixIconClass: ["text-color-default"],
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    available: true,
    status: "default",
  },
});
