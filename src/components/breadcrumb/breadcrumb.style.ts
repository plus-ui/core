import { tv } from "tailwind-variants";

export const breadCrumbStyle = tv({
  slots: {
    host: "breadcrumb flex flex-row items-center justify-start font-sans",
  },
  variants: {
    size: {
      sm: {
        host: "gap-1.5",
      },
      md: {
        host: "gap-2",
      },
      lg: {
        host: "gap-2.5",
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
