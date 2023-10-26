import { tv } from "tailwind-variants";

export const captionStyle = tv({
  base: "block font-sans text-xs font-normal text-color-caption",
  variants: {
    error: {
      true: "text-color-error",
      false: "",
    },
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-sm",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    error: false,
    size: "md",
  },
});
