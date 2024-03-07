import { tv } from "tailwind-variants";

export const optionStyle = tv({
  slots: {
    base: [
      "plus-dropdown-item flex flex-row items-center text-color-default bg-base-default rounded  hover:bg-color-default-hover cursor-pointer w-full active:bg-color-default-pressed focus:bg-color-default-focus disabled:bg-color-disabled",
    ],
  },
  variants: {
    size: {
      sm: {
        base: ["h-10 gap-2 text-sm  py-0.5 px-1"],
      },
      md: {
        base: ["h-12 gap-2 text-md py-1 px-1.5"],
      },
      lg: {
        base: ["h-14 gap-2 text-lg py-1.5 px-2"],
      },
    },
    active: {
      true: {
        base: ["bg-color-invert-primary hover:bg-color-invert-primary-hover active:bg-color-invert-primary-pressed focus:bg-color-invert-primary-focus"],
      },
    },
    disabled: {
      true: {
        base: [],
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    active: false,
    disabled: false,
  },
});
