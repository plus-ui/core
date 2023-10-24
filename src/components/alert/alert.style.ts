import { tv } from "tailwind-variants";

export const alertStyle = tv({
  slots: {
    base: "font-sans flex flex-row items-baseline justify-between border border-solid rounded-md font-medium",
    textArea: "flex flex-1 flex-col items-start justify-center",
    descriptionClass: "empty:hidden font-normal",
    closableArea: "flex h-6 w-6 cursor-pointer items-center justify-center",
  },
  variants: {
    size: {
      sm: {
        base: "text-sm p-3 gap-2.5",
        descriptionClass: "text-xs",
        textArea: "gap-2",
      },
      md: {
        base: "text-base p-3.5 gap-3",
        descriptionClass: "text-sm",
        textArea: "gap-3",
      },
      lg: {
        base: "text-lg p-4 gap-3.5",
        descriptionClass: "text-base",
        textArea: "gap-3.5",
      },
    },
    kind: {
      filled: {
        base: "rounded-md border-transparent",
      },
      outline: {
        base: " border border-solid",
      },
      text: {
        base: "rounded-md",
      },
      dashed: {
        base: " border border-dashed",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    closable: {
      true: {
        closableArea: "cursor-pointer",
      },
      false: {
        closableArea: "hidden",
      },
    },
    status: {
      success: "bg-color-success text-color-base",
      warning: "bg-color-warning text-color-base",
      error: "bg-color-error text-color-base",
      info: "bg-color-information text-color-base",
      default: "bg-color-default text-color-default",
    },
    invert: {
      true: {},
    },
  },
  compoundVariants: [
    {
      kind: ["outline", "dashed"],
      class: {
        base: ["border-box border"],
      },
    },
    {
      kind: ["text", "filled"],
      class: {
        base: [""],
      },
    },
    {
      status: "default",
      invert: true,
      class: {
        base: ["bg-color-invert-default text-color-base"],
      },
    },
    {
      status: "success",
      invert: true,
      class: {
        base: ["bg-color-invert-success text-color-default"],
      },
    },
    {
      status: "warning",
      invert: true,
      class: {
        base: ["bg-color-invert-warning text-color-default"],
      },
    },
    {
      status: "error",
      invert: true,
      class: {
        base: ["bg-color-invert-error text-color-default"],
      },
    },
    {
      status: "info",
      invert: true,
      class: {
        base: ["bg-color-invert-information text-color-default"],
      },
    },
    {
      kind: ["outline", "dashed"],
      status: "default",
      class: {
        base: ["border-color-default text-color-default bg-transparent"],
      },
    },
    {
      kind: ["outline", "dashed"],
      status: "success",
      class: {
        base: ["border-color-success text-color-success bg-transparent"],
      },
    },
    {
      kind: ["outline", "dashed"],
      status: "warning",
      class: {
        base: ["border-color-warning text-color-warning bg-transparent"],
      },
    },
    {
      kind: ["outline", "dashed"],
      status: "info",
      class: {
        base: ["border-color-information text-color-information bg-transparent"],
      },
    },
    {
      kind: ["outline", "dashed"],
      status: "error",
      class: {
        base: ["border-color-error text-color-error bg-transparent"],
      },
    },
  ],
  defaultVariants: {
    size: "md",
    status: "default",
    invert: false,
    kind: "filled",
  },
});
