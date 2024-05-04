import { tv } from "tailwind-variants";

export const linkStyle = tv({
  slots: {
    host: "flex flex-row items-center justify-center gap-2.5",
    base: ["outline-none focus-visible:ring-2 focus-visible:ring-offset-2", "transition-colors duration-200 ease-in-out"],
  },
  variants: {
    kind: {
      default: "text-color-link hover:underline ",
      primary: "text-color-primary hover:underline",
    },
    disabled: {
      true: "cursor-not-allowed text-color-disabled user-select-none pointer-events-none",
      false: "",
    },
    active: {
      true: {
        base: "visited:text-color-caption",
      },
      false: {
        base: "text-color-link",
      },
    },
    isBreadcrumb: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      kind: ["default", "primary"],
      disabled: false,
      isBreadcrumb: false,
      class: {
        base: "visited:text-color-visited",
      },
    },
  ],
  defaultVariants: {
    kind: "default",
    disabled: false,
    active: false,
    isbreadCrumb: false,
  },
});
