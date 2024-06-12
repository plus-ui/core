import { tv } from "tailwind-variants";

export const buttonGroupStyle = tv({
  slots: {
    base: ["flex"],
  },
  variants: {
    orientation: {
      vertical: {
        base: "flex flex-col",
      },
      horizontal: {
        base: "flex flex-row",
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});
