import { tv } from "tailwind-variants";

export const badgeStyle = tv({
  slots: {
    base: ["absolute antialiased font-sans inline-flex items-center justify-center text-center whitespace-nowrap z-auto border border-color-base empty:box-content"],
  },
  variants: {
    size: {
      sm: {
        base: "text-xs gap-1 empty:min-w-1.5 min-w-5.5 empty:min-h-1.5 min-h-5.5 empty:px-0 px-1",
      },
      md: {
        base: "text-sm gap-1.5 empty:min-w-2 min-w-6 empty:min-h-2 min-h-6 empty:px-0 px-1.5",
      },
      lg: {
        base: "text-base gap-1.5 empty:min-w-2.5 min-w-7 empty:min-h-2.5 min-h-7 empty:px-0 px-1.5",
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
        base: "bg-color-info text-color-base",
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
    orientation: {
      "top-left": {
        base: "top-0 left-0 scale-100 transform -translate-x-1/2 -translate-y-1/2 ",
      },
      "top-right": {
        base: "top-0 right-0 scale-100 transform translate-x-1/2 -translate-y-1/2",
      },
      "bottom-left": {
        // base: "top-auto -bottom-2 -left-2 empty:-bottom-1 empty:-left-1",
        base: "bottom-0 left-0 scale-100 transform -translate-x-1/2 translate-y-1/2",
      },
      "bottom-right": {
        // base: "top-auto -right-2 -bottom-2 empty:-bottom-1 empty:-right-1",
        base: "bottom-0 right-0 scale-100 transform translate-x-1/2 translate-y-1/2",
      },
    },
    isSingleChar: {
      true: {
        base: "px-0",
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
        base: ["bg-color-invert-info"],
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
    orientation: "top-right",
    invert: false,
    isSingleChar: false,
  },
});
