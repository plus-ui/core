import { tv } from "tailwind-variants";

export const DividerStyle = tv({
  slots: {
    base: ["block border-0   border-color-default"],
  },
  variants: {
    kind: {
      default: "border-solid",
      dashed: "border-dashed",
    },
    type: {
      vertical: " h-full w-2 border-l",
      horizontal: "h-2 w-full border-t",
    },
  },
  defaultVariants: {
    kind: "default",
    type: "horizontal",
  },
});
