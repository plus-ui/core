import { tv } from "tailwind-variants";

export const breadCrumbStyle = tv({
  slots: {
    base: "breadcrumb flex flex-row items-center justify-center gap-2.5 font-sans",
  },
  variants: {
    size: {
      sm: {
        base: "text-xs",
      },
      md: {
        base: "text-xs",
      },
      lg: {
        base: "text-sm",
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
