import { tv } from "tailwind-variants";

export const drawerStyle = tv({
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
