import { tv } from "tailwind-variants";

export const dropdownItemStyle = tv({
  slots: {
    base: ["flex flex-row bg-base-default py-0.5 px-1  hover:bg-color-default-hover cursor-pointer w-full"],
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
