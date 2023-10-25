import { tv } from "tailwind-variants";

export const buttonGroupStyle = tv({
  slots: {
    base: ["flex flex-row gap-0 [>plus-button]:border border-solid border-r-indigo-300 " ],
  },
  variants: {
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
