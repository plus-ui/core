import { tv } from "tailwind-variants";

export const chipStyle = tv({
  slots: {
    base: [
      "font-sans inline-flex items-center justify-center text-center whitespace-nowrap z-auto rounded-fullborder border-solid rounded-full bg-color-default text-color-default",
    ],
  },
  variants: {
    size: {
      sm: {
        base: "text-xs px-1.5 py-0.5 gap-1",
      },
      md: {
        base: "text-sm px-2 py-1 gap-2",
      },
      lg: {
        base: "text-base px-3 py-2 gap-2",
      },
    },
    kind: {
      filled: {
        base: "border-transparent",
      },
      outlined: {
        base: "bg-color-base",
      },
    },
    invert: {
      true: "bg-color-invert-default text-color-base",
      false: "",
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
      default: {},
    },
    disabled: {
      true: {
        base: "",
      },
    },
  },
  compoundVariants: [
    {
      invert: true,
      status: "success",
      class: {
        base: ["bg-color-invert-success text-color-default"],
      },
    },
    {
      invert: true,
      status: "info",
      class: {
        base: ["bg-color-invert-information text-color-default"],
      },
    },
    {
      invert: true,
      status: "warning",
      class: {
        base: ["bg-color-invert-warning text-color-default"],
      },
    },
    {
      invert: true,
      status: "error",
      class: {
        base: ["bg-color-invert-error text-color-default"],
      },
    },
    {
      kind: "outlined",
      class: {
        base: ["border border-solid bg-transparent"],
      },
    },
    {
      kind: "outlined",
      status: "info",
      class: {
        base: ["text-color-primary border-color-primary"],
      },
    },
    {
      kind: "outlined",
      status: "success",
      class: {
        base: ["text-color-success border-color-success"],
      },
    },
    {
      kind: "outlined",
      status: "warning",
      class: {
        base: ["text-color-warning border-color-warning"],
      },
    },
    {
      kind: "outlined",
      status: "error",
      class: {
        base: ["text-color-error border-color-error"],
      },
    },
    {
      kind: "outlined",
      status: "default",
      class: {
        base: ["text-color-default border-color-default"],
      },
    },
    {
      disabled: true,
      kind: "filled",
      class: {
        base: ["bg-color-disabled text-color-disabled cursor-not-allowed"],
      },
    },
    {
      disabled: true,
      kind: "outlined",
      class: {
        base: ["border-color-disabled text-color-disabled cursor-not-allowed"],
      },
    },
  ],
  defaultVariants: {
    size: "md",
    status: "default",
    kind: "filled",
    disabled: false,
    invert: false,
  },
});
