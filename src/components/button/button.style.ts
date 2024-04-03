import { tv } from "tailwind-variants";

export const buttonStyle = tv({
  slots: {
    base: [
      "relative antialiased flex items-center justify-center font-sans font-medium rounded border border-color-default",
      "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:z-[1]",
    ],
  },
  variants: {
    size: {
      sm: {
        base: "gap-2 py-2 px-2 text-sm",
      },
      md: {
        base: "gap-2.5 py-2 px-3 text-base",
      },
      lg: {
        base: "gap-3 py-2 px-4 text-lg",
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
        base: "bg-color-base border-dashed ",
      },
      text: {
        base: "bg-transparent border-transparent",
      },
    },
    groupPosition: {
      vertical: {
        base: "w-full",
      },
      horizontal: {},
    },
    status: {
      default: "",
      primary: "",
      info: "",
      success: "",
      warning: "",
      error: "",
      invert: "",
    },
    disabled: {
      true: {
        base: "cursor-not-allowed text-color-disabled user-select-none",
      },
    },
    groupOrder: {
      first: {
        base: "rounded-none rounded-l",
      },
      middle: {
        base: "rounded-none",
      },
      last: {
        base: "rounded-none rounded-r",
      },
    },
    loading: {
      true: {
        base: "cursor-wait relative overflow-hidden",
      },
    },
  },
  compoundVariants: [
    {
      groupPosition: "vertical",
      groupOrder: "first",
      class: {
        base: "rounded-none rounded-t",
      },
    },
    {
      groupPosition: "vertical",
      groupOrder: "middle",
      class: {
        base: "rounded-none",
      },
    },
    {
      groupPosition: "vertical",
      groupOrder: "last",
      class: {
        base: "rounded-none rounded-b",
      },
    },
    {
      kind: "filled",
      status: "default",
      disabled: false,
      class: {
        base: [
          "text-color-default bg-color-default",
          "hover:bg-color-default-hover",
          "active:bg-color-default-pressed",
          "focus-visible:bg-color-default-focus",
          "data-[loading=true]:bg-color-default-pressed",
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
          "focus-visible:bg-color-primary-focus",
          "data-[loading=true]:bg-color-primary-pressed",
        ],
      },
    },
    {
      kind: "filled",
      status: "info",
      disabled: false,
      class: {
        base: [
          "text-color-base bg-color-info",
          "hover:bg-color-info-hover",
          "active:bg-color-info-pressed",
          "focus-visible:bg-color-info-focus",
          "data-[loading=true]:bg-color-info-pressed",
        ],
      },
    },
    {
      kind: "filled",
      status: "success",
      disabled: false,
      class: {
        base: [
          "text-color-base bg-color-success",
          "hover:bg-color-success-hover",
          "active:bg-color-success-pressed",
          "focus-visible:bg-color-success-focus",
          "data-[loading=true]:bg-color-success-pressed",
        ],
      },
    },
    {
      kind: "filled",
      status: "warning",
      disabled: false,
      class: {
        base: [
          "text-color-base bg-color-warning",
          "hover:bg-color-warning-hover",
          "active:bg-color-warning-pressed",
          "focus-visible:bg-color-warning-focus",
          "data-[loading=true]:bg-color-warning-pressed",
        ],
      },
    },
    {
      kind: "filled",
      status: "error",
      disabled: false,
      class: {
        base: [
          "text-color-base bg-color-error",
          "hover:bg-color-error-hover",
          "active:bg-color-error-pressed",
          "focus-visible:bg-color-error-focus",
          "data-[loading=true]:bg-color-error-pressed",
        ],
      },
    },
    {
      kind: "filled",
      status: "invert",
      disabled: false,
      class: {
        base: [
          "text-color-invert-default bg-color-invert-default",
          "hover:bg-color-invert-default-hover",
          "active:bg-color-invert-default-pressed",
          "focus-visible:bg-color-invert-default-focus",
          "data-[loading=true]:bg-color-invert-default-pressed",
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
          "focus-visible:bg-color-default-focus",
          "data-[loading=true]:bg-color-default-pressed",
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
          "focus-visible:bg-color-base-focus",
          "data-[loading=true]:bg-color-base-pressed",
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
          "data-[loading=true]:bg-color-base-pressed",
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
          "data-[loading=true]:bg-color-base-pressed",
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
          "focus-visible:bg-color-default-focus",
          "data-[loading=true]:bg-color-default-pressed",
        ],
      },
    },
    {
      kind: "text",
      status: "primary",
      disabled: false,
      class: {
        base: ["text-color-primary", "hover:bg-color-base-hover", "active:bg-color-base-pressed", "focus-visible:bg-color-base-focus", "data-[loading=true]:bg-color-base-pressed"],
      },
    },
  ],
  defaultVariants: {
    size: "md",
    kind: "filled",
    status: "default",
    disabled: false,
    groupOrder: undefined,
    groupPosition: undefined,
    loading: false,
  },
});
