import { tv } from "tailwind-variants";

export const toastStyle = tv({
  slots: {
    base: [
      "plus-toast-class font-sans antialiased flex items-center justify-between border border-solid border-transparent rounded font-medium w-full max-w-2xl transition duration-300 ease-in-out transform scale-95",
    ],
    iconClass: ["plus-toast__icon"],
    messageClass: ["plus-toast__message flex items-center"],
    closeClass: [
      "plus-toast__close cursor-pointer relative",
      // Clicking area
      "before:absolute before:inset-0 before:z-10",
      "before:rounded-full before:cursor-pointer before:bg-transparent before:content-['']",
      "before:w-10 before:h-10 before:-top-1.5 before:-left-3 before:z-10",
    ],
    toastContainer: ["plus-toast-container fixed z-50"],
  },
  variants: {
    size: {
      sm: {
        base: ["p-5 gap-2.5 text-base"],
        messageClass: ["gap-2.5"],
      },
      md: {
        base: ["p-6 gap-3 text-lg"],
        messageClass: ["gap-3"],
      },
      lg: {
        base: ["p-7 gap-3.5 text-xl"],
        messageClass: ["gap-3.5"],
      },
    },
    kind: {
      filled: [],
      outlined: [],
    },
    status: {
      success: {
        base: ["bg-color-success text-color-base"],
        iconClass: ["text-color-invert-success"],
      },
      warning: {
        base: ["bg-color-warning text-color-base"],
        iconClass: ["text-color-invert-warning"],
      },
      error: {
        base: ["bg-color-error text-color-base"],
        iconClass: ["text-color-invert-error"],
      },
      info: {
        base: ["bg-color-info text-color-base"],
        iconClass: ["text-color-invert-info"],
      },
      default: {
        base: ["bg-color-invert-default text-color-base"],
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
