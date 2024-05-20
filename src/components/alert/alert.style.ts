import { tv } from "tailwind-variants";

export const alertStyle = tv({
  slots: {
    base: "font-sans antialiased flex flex-row items-baseline justify-between border border-solid rounded-md font-medium w-fit",
    textArea: "flex flex-1 flex-col items-start justify-center",
    descriptionClass: "empty:hidden font-normal",
    dismissArea: "flex h-6 w-6 cursor-pointer items-center justify-center",
    iconClass: "",
  },
  variants: {
    size: {
      sm: {
        base: "text-sm p-3 gap-2.5",
        descriptionClass: "text-xs",
        textArea: "gap-2",
        iconClass: "text-sm",
      },
      md: {
        base: "text-base p-3.5 gap-3",
        descriptionClass: "text-sm",
        textArea: "gap-2.5",
        iconClass: "text-base",
      },
      lg: {
        base: "text-lg p-4 gap-3.5",
        descriptionClass: "text-base",
        textArea: "gap-3",
        iconClass: "text-lg",
      },
    },
    kind: {
      filled: {
        base: "rounded-md border-transparent",
      },
      outlined: {
        base: " border border-solid",
      },
      text: {
        base: "rounded-md",
      },
      dashed: {
        base: " border border-dashed border-color-default",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    dismiss: {
      true: {
        dismissArea: "cursor-pointer",
      },
      false: {
        dismissArea: "hidden",
      },
    },
    status: {
      success: {
        base: ["bg-color-success text-color-base"],
        // iconClass: "text-color-invert-success"
      },
      warning: {
        base: ["bg-color-warning text-color-base"],
        // iconClass: "text-color-invert-warning"
      },
      error: {
        base: ["bg-color-error text-color-base"],
        // iconClass: "text-color-invert-error"
      },
      info: {
        base: ["bg-color-info text-color-base"],
        // iconClass: "text-color-invert-info"
      },
      default: {
        base: ["bg-color-default text-color-default"],
      },
    },
    invert: {
      true: {},
    },
  },
  compoundVariants: [
    {
      kind: ["outlined", "dashed"],
      class: {
        base: ["border"],
      },
    },
    {
      kind: ["text", "filled"],
      class: {
        base: [""],
      },
    },
    {
      kind: "filled",
      status: "success",
      invert: false,
      class: {
        iconClass: "text-color-invert-success",
      },
    },

    {
      kind: "filled",
      status: "info",
      invert: false,
      class: {
        iconClass: "text-color-invert-info",
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
        iconClass: "text-color-success",
      },
    },
    {
      status: "warning",
      invert: true,
      class: {
        base: ["bg-color-invert-warning text-color-default"],
        iconClass: "text-color-warning",
      },
    },
    {
      status: "error",
      invert: true,
      class: {
        base: ["bg-color-invert-error text-color-default"],
        iconClass: "text-color-error",
      },
    },
    {
      status: "info",
      invert: true,
      class: {
        base: ["bg-color-invert-info text-color-default"],
        iconClass: "text-color-info",
      },
    },
    {
      kind: ["outlined", "dashed"],
      status: "default",
      class: {
        base: ["border-color-default text-color-default bg-transparent"],
      },
    },
    {
      kind: ["outlined", "dashed"],
      status: "success",
      class: {
        base: ["border-color-success text-color-success bg-transparent"],
        descriptionClass: "text-color-default",
      },
    },
    {
      kind: ["outlined", "dashed"],
      status: "warning",
      class: {
        base: ["border-color-warning text-color-warning bg-transparent"],
        descriptionClass: "text-color-default",
      },
    },
    {
      kind: ["outlined", "dashed"],
      status: "info",
      class: {
        base: ["border-color-info text-color-info bg-transparent"],
        descriptionClass: "text-color-default",
      },
    },
    {
      kind: ["outlined", "dashed"],
      status: "error",
      class: {
        base: ["border-color-error text-color-error bg-transparent"],
        descriptionClass: "text-color-default",
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
