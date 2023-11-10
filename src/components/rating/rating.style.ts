import { tv } from "tailwind-variants";

export const ratingStyle = tv({
  slots: {
    host: ["antialiased w-full flex items-center justify-start gap-2"],
    empty: "text-color-placeholder",
    predefined: "text-color-disabled",
    hovered: "text-color-warning",
    box: "relative",
    icon: "overflow-hidden absolute top-0 left-0 h-full ",
  },
  variants: {
    size: {
      sm: {
        host: "text-sm",
      },
      md: {
        host: "text-base",
      },
      lg: {
        host: "text-lg",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
  },
});
