import { tv } from "tailwind-variants";

export const buttonStyle = tv({
  slots: {
    base: ["flex items-center justify-center font-sans font-medium rounded border box-content"],
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
        base: "",
      },
      outlined: {
        base: "",
      },
      dashed: {
        base: "",
      },
      text: {
        base: "",
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
        base: "",
      },
    },
  },
  compoundVariants: [
    {
      kind: "filled",
      status: "default",
      class: {
        base: "text-[--text-default] bg-[--background-default-default] border-[--background-default-default]",
      },
    },
    {
      kind: "filled",
      status: "primary",
      class: {
        base: "text-[--text-base] bg-[--background-primary-default] border-[--background-primary-default]",
      },
    },
    {
      kind: "outlined",
      status: "default",
      class: {
        base: "text-[--text-default] bg-[--background-base-default] border-[--border-default]",
      },
    },
    {
      kind: "outlined",
      status: "primary",
      class: {
        base: "text-[--text-primary] bg-[--background-base-default] border-[--stroke-primary]",
      },
    },
    {
      kind: "dashed",
      status: "default",
      class: {
        base: "text-[--text-default] bg-[--background-base-default] border-[--border-default] border-dashed",
      },
    },
    {
      kind: "dashed",
      status: "primary",
      class: {
        base: "text-[--text-primary] bg-[--background-base-default] border-[--stroke-primary] border-dashed",
      },
    },
    {
      kind: "text",
      status: "default",
      class: {
        base: "text-[--text-default] bg-transparent border-transparent",
      },
    },
    {
      kind: "text",
      status: "primary",
      class: {
        base: "text-[--text-primary] bg-transparent border-transparent ",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    kind: "filled",
    status: "default",
  },
});
