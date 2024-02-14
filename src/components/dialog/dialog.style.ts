import { tv } from "tailwind-variants";

export const dialogStyle = tv({
  slots: {
    base: ["plus-dialog font-sans antialiased", "rounded bg-color-surface-base text-color-default max-w-96", "absolute top-0 left-0 z-50 hidden"],
    descriptionClass: [""],
    titleClass: ["font-medium flex gap-2 items-center"],
    arrowClass: ["arrow absolute w-3 h-3 bg-color-surface-base rotate-45 rounded-sm z-auto"],
    contentClass: ["flex flex-col gap-2.5"],
    footerClass: ["flex justify-end gap-2"],
    wrapperClass: ["flex flex-col gap-5 p-5"],
    prefixIconClass: ["text-color-primary"],
  },
  variants: {
    size: {
      sm: {
        base: [""],
        descriptionClass: ["text-sm"],
        titleClass: ["text-lg"],
        contentClass: [""],
        footerClass: [""],
      },
      md: {
        base: [""],
        descriptionClass: ["text-base"],
        titleClass: ["text-xl"],
      },
      lg: {
        base: [""],
        descriptionClass: ["text-lg"],
        titleClass: ["text-2xl"],
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
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    available: true,
  },
});
