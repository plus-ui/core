import { tv } from "tailwind-variants";

export const labelStyle = tv({
  base: "block font-sans font-medium text-color-default",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    required: {
      true: "after:content-['*'] after:text-color-default after:ml-0.5",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    required: false,
  },
});
