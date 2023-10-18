import { tv } from "tailwind-variants";

export const badgeStyle = tv({
  slots: {
    base: ["absolute font-sans inline-flex items-center justify-center text-center whitespace-nowrap z-auto"],
  },
  variants: {
    size: {
      sm: {
        base: "text-xs w-4 h-4 p-0.5",
      },
      md: {
        base: "text-xs py-1 empty:px-1 empty:min-w-0 min-w-6 empty:min-h-0 min-h-6",
      },
      lg: {
        base: "text-base w-6 h-6 p-2",
      },
    },
    kind: {
      dot: {
        base: "rounded-full",
      },
      text: {
        base: "rounded-full",
      },
    },
    status: {
      success: {
        base: "bg-color-success text-color-base",
      },
      warning: {
        base: "bg-color-warning text-color-base",
      },
      error: {
        base: "bg-color-error text-color-base",
      },
      info: {
        base: "bg-color-information text-color-base",
      },
      default: {
        base: "bg-color-default text-color-default",
      },
    },
    invert: {
      true: {
        base: "",
      },
    },
    placement: {
      "top-left": {
        base: "-left-2 -top-2 empty:-left-1 empty:-top-1",
      },
      "top-right": {
        base: "-right-2 -top-2 empty:-right-1 empty:-top-1",
      },
      "bottom-left": {
        base: "top-auto -bottom-2 -left-2 empty:-bottom-1 empty:-left-1",
      },
      "bottom-right": {
        base: "top-auto -right-2 -bottom-2 empty:-bottom-1 empty:-right-1",
      },
    },
  },
  compoundVariants: [
    {
      status: ["success", "warning", "error", "info"],
      invert: true,
      class: {
        base: ["text-color-default"],
      },
    },
    {
      status: "success",
      invert: true,
      class: {
        base: ["bg-color-invert-success"],
      },
    },
    {
      status: "warning",
      invert: true,
      class: {
        base: ["bg-color-invert-warning"],
      },
    },
    {
      status: "error",
      invert: true,
      class: {
        base: ["bg-color-invert-error"],
      },
    },
    {
      status: "info",
      invert: true,
      class: {
        base: ["bg-color-invert-information"],
      },
    },
    {
      status: "default",
      invert: true,
      class: {
        base: ["bg-color-invert-default text-color-base"],
      },
    },
  ],
  defaultVariants: {
    size: "md",
    status: "default",
    kind: "text",
    placement: "top-right",
    invert: false,
  },
});
