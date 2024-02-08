import { tv } from "tailwind-variants";

export const selectStyle = tv({
  slots: {
    base: [""],
  },
  variants: {
    size: {
      sm: {
        base: [],
      },
      md: {
        base: [],
      },
      lg: {
        base: [],
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
  },
});
