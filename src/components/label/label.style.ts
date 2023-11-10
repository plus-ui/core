import { tv } from "tailwind-variants";

export const labelStyle = tv({
  base: "block font-sans font-medium",
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
    disabled: {
      true: {
        base: "text-color-disabled",
        required: "after:text-color-disabled",
      },
      false: {
        base: "text-color-default",
        required: "after:text-color-default",
      },
    },
  },
  defaultVariants: {
    size: "md",
    required: false,
    disabled: false,
  },
});
