import { tv } from "tailwind-variants";

export const toastStyle = tv({
  slots: {
    base: [
      "plus-toast-class font-sans antialiased flex flex-row items-center justify-between border border-solid border-transparent rounded-lg font-medium w-full max-w-2xl transition duration-300 ease-in-out transform scale-95 shadow-lg",
    ],
    iconClass: ["plus-toast__icon"],
    messageClass: ["plus-toast__message flex items-center font-normal text-color-default"],
    closeClass: [
      "plus-toast__close cursor-pointer relative",
      // Clicking area
      "before:absolute before:inset-0 before:z-10",
      "before:rounded-full before:cursor-pointer before:bg-transparent before:content-['']",
      "before:w-10 before:h-10 before:-top-1.5 before:-left-3 before:z-10",
    ],
    toastContainer: ["plus-toast-container fixed z-50"],
    contentClass: "flex flex-col",
    titleClass: "font-medium text-color-default",
    footerClass: "flex flex-row items-center justify-end gap-2",
    containerClass: "plus-toast-container flex flex-row items-baseline justify-center flex-1",
  },
  variants: {
    size: {
      sm: {
        base: ["p-3"],
        containerClass: "gap-2.5",
        messageClass: "text-sm",
        titleClass: "text-base",
        contentClass: "gap-2",
      },
      md: {
        base: ["p-3.5"],
        containerClass: "gap-3",
        titleClass: "text-lg",
        messageClass: "text-base",
        contentClass: "gap-2.5",
      },
      lg: {
        base: ["p-4"],
        containerClass: "gap-3.5",
        messageClass: "text-lg",
        titleClass: "text-xl",
        contentClass: "gap-3",
      },
    },
    kind: {
      filled: [],
      outlined: [],
    },
    status: {
      success: {
        base: ["bg-color-invert-success text-color-default"],
        iconClass: ["text-color-success"],
      },
      warning: {
        base: ["bg-color-invert-warning text-color-default"],
        iconClass: ["text-color-warning"],
      },
      error: {
        base: ["bg-color-invert-error text-color-default"],
        iconClass: ["text-color-error"],
      },
      info: {
        base: ["bg-color-invert-info text-color-default"],
        iconClass: ["text-color-info"],
      },
      default: {
        base: ["bg-color-default text-color-default"],
      },
    },
    invert: {
      true: [],
      false: [],
    },
    placement: {
      "top-start": {},
      "top-end": {},
      "top": {},
      "bottom-start": {},
      "bottom-end": {},
      "bottom": {},
      "left-start": {},
      "left-end": {},
      "left": {},
      "right-start": {},
      "right-end": {},
      "right": {},
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    kind: "filled",
    status: "default",
    invert: false,
    placement: "top-start",
  },
});
