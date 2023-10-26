import { tv } from "tailwind-variants";

export const buttonGroupStyle = tv({
  slots: {
    base: ["flex flex-row"],
  },
  variants: {
    type: {
      vertical: {
        base: "flex-col items-stretch w-fit",
      },
      horizontal: {
        base: "flex-row",
      },
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    kind: {
      dot: {
        base: "rounded-full",
      },
      text: {
        base: "rounded-full",
      },
    },
    status: {},
    invert: {
      true: {
        base: "",
      },
    },
    placement: {},
    isSingleChar: {},
  },
  compoundVariants: [],
  defaultVariants: {},
});
