import { tv } from "tailwind-variants";

export const toastContainerStyle = tv({
  slots: {
    base: ["plus-container fixed w-fit flex flex-col gap-2"],
  },
  variants: {
    position: {
      "top-left": {
        base: ["top-5 left-5 z-10"],
      },
      "top-right": {
        base: ["top-5 right-5 z-10"],
      },
      "bottom-left": {
        base: ["bottom-5 left-5 z-10"],
      },
      "bottom-right": {
        base: ["bottom-5 right-5 z-10"],
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    position: "top-right",
  },
});
