import { tv } from "tailwind-variants";

export const selectStyle = tv({
  slots: {
    base: "flex flex-col min-w-96 items-center justify-center relative",
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
