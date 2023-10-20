import { tv } from "tailwind-variants";

export const buttonStyle = tv({
  slots: {
    base: [
      "flex items-center justify-center font-sans rounded border", 
      "outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    ],
  },
  variants: {
    size: {
      sm: {
        base: "gap-2 py-1 px-2 text-sm",
      },
      md: {
        base: "gap-2 py-2 px-2 text-sm",
      },
      lg: {
        base: "gap-2 py-2 px-2.5 text-lg",
      },
    },
    kind: {
      filled: {
        base: "border-transparent",
      },
      outlined: {
        base: "bg-color-base",
      },
      dashed: {
        base: "bg-color-base border-dashed",
      },
      text: {
        base: "bg-transparent border-transparent",
      },
    },
    status: {
      default: {
        base: "",
      },
      primary: {
        base: "",
      },
    },
    disabled: {
      true: {
        base: "cursor-not-allowed text-color-disabled user-select-none",
      },
    },
  },
  compoundVariants: [
    {
      kind: "filled",
      status: "default",
      disabled: false,
      class: {
        base: [
          "text-color-default bg-color-default", 
          "hover:bg-color-default-hover", 
          "active:bg-color-default-pressed", 
          "focus-visible:bg-color-default-focus"
        ],
      },
    },
    {
      kind: "filled",
      status: "primary",
      disabled: false,
      class: {
        base: [
          "text-color-base bg-color-primary", 
          "hover:bg-color-primary-hover", 
          "active:bg-color-primary-pressed", 
          "focus-visible:bg-color-primary-focus"
        ],
      },
    },
    {
      kind: "filled",
      disabled: true,
      class: {
        base: "bg-color-disabled",
      },
    },
    {
      kind: "outlined",
      status: "default",
      disabled: false,
      class: {
        base: [
          "text-color-default border-color-default", 
          "hover:bg-color-default-hover", 
          "active:bg-color-default-pressed", 
          "focus-visible:bg-color-default-focus"
        ],
      },
    },
    {
      kind: "outlined",
      status: "primary",
      disabled: false,
      class: {
        base: [
          "text-color-primary border-color-primary", 
          "hover:bg-color-base-hover", 
          "active:bg-color-base-pressed", 
          "focus-visible:bg-color-base-focus"
        ],
      },
    },
    {
      kind: "dashed",
      status: "default",
      disabled: false,
      class: {
        base: [
          "text-color-default  border-color-default",
          "hover:bg-color-base-hover",
          "active:bg-color-base-pressed",
          "focus-visible:bg-color-base-focus",
        ],
      },
    },
    {
      kind: "dashed",
      status: "primary",
      disabled: false,
      class: {
        base: [
          "text-color-primary border-color-primary",
          "hover:bg-color-base-hover",
          "active:bg-color-base-pressed",
          "focus-visible:bg-color-base-focus",
        ],
      },
    },
    {
      kind: "text",
      status: "default",
      disabled: false,
      class: {
        base: [
          "text-color-default", 
          "hover:bg-color-default-hover", 
          "active:bg-color-default-pressed", 
          "focus-visible:bg-color-default-focus"
        ],
      },
    },
    {
      kind: "text",
      status: "primary",
      disabled: false,
      class: {
        base: [
          "text-color-primary", 
          "hover:bg-color-base-hover", 
          "active:bg-color-base-pressed", 
          "focus-visible:bg-color-base-focus"
        ],
      },
    },
  ],
  defaultVariants: {
    size: "md",
    kind: "filled",
    status: "default",
    disabled: false,
  },
});
