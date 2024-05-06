import { tv } from "tailwind-variants";

export const breadCrumbStyle = tv({
  slots: {
    host: "breadcrumb flex flex-row items-center justify-start font-sans gap-2.5",
  },
  variants: {
    size: {
      sm: {
        host: "",
      },
      md: {
        host: "",
      },
      lg: {
        host: "",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    active: false,
    disabled: false,
    readonly: false,
  },
});
