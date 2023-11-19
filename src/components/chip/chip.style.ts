import { tv } from "tailwind-variants";

export const chipStyle = tv({
  slots: {
    base: [
      "font-sans inline-flex items-center justify-center text-center whitespace-nowrap z-auto rounded-fullborder border-solid rounded-full bg-color-default text-color-default hover:bg-color-default-hover active:bg-color-default-pressed",
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
      true: "bg-color-invert-default text-color-base hover:bg-color-invert-default-hover active:bg-color-invert-default-pressed",
      false: "",
    },
    status: {
      success: {
        base: "bg-color-success text-color-base hover:bg-color-success-hover active:bg-color-success-pressed",
      },
      warning: {
        base: "bg-color-warning text-color-base hover:bg-color-warning-hover active:bg-color-warning-pressed",
      },
      error: {
        base: "bg-color-error text-color-base hover:bg-color-error-hover active:bg-color-error-pressed",
      },
      info: {
        base: "bg-color-info text-color-base hover:bg-color-info-hover active:bg-color-info-pressed",
      },
      default: {
        base: "",
      },
    },
    disabled: {
      true: {
        base: "bg-color-disabled text-color-disabled cursor-not-allowed",
      },
    },
  },
  compoundVariants: [
    {
      invert: true,
      status: "success",
      class: {
        base: ["bg-color-invert-success text-color-default hover:bg-color-invert-success-hover active:bg-color-invert-success-pressed"],
      },
    },
    {
      invert: true,
      status: "info",
      class: {
        base: ["bg-color-invert-info text-color-default hover:bg-color-invert-info-hover active:bg-color-invert-info-pressed"],
      },
    },
    {
      invert: true,
      status: "warning",
      class: {
        base: ["bg-color-invert-warning text-color-default hover:bg-color-invert-warning-hover active:bg-color-invert-warning-pressed"],
      },
    },
    {
      invert: true,
      status: "error",
      class: {
        base: ["bg-color-invert-error text-color-default hover:bg-color-invert-error-hover active:bg-color-invert-error-pressed"],
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
      class: {
        base: ["border border-solid bg-transparent hover:bg-color-base-hover active:bg-color-base-pressed"],
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
        base: ["bg-color-disabled text-color-disabled cursor-not-allowed active:bg-color-disabled hover:bg-color-disabled"],
      },
    },
    {
      disabled: true,
      kind: "outlined",
      class: {
        base: ["border-color-disabled text-color-disabled cursor-not-allowed hover:bg-color-base active:bg-color-base "],
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
