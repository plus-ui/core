import { tv } from "tailwind-variants";

export const tooltipStyle = tv({
  slots: {
    base: ["plus-tooltip font-sans antialiased", 
    "rounded bg-color-invert-default text-color-base",
    "absolute top-0 left-0 z-50 hidden select-none",
  ],
    descriptionClass: [""],
    messageClass: ["font-medium"],
    arrowClass: ["arrow absolute w-3 h-3 bg-color-invert-default rotate-45 rounded-sm"],
  },
  variants: {
    size: {
      sm: {
        base: ["text-sm"],
        descriptionClass: ["py-1 px-2"],
        messageClass: ["py-1 px-2"],
      },
      md: {
        base: ["text-base"],
        descriptionClass: ["py-1 px-3"],
        messageClass: ["py-1 px-3"],
      },
      lg: {
        base: ["text-lg"],
        descriptionClass: ["py-1 px-4"],
        messageClass: ["py-1 px-4"],
      },
    },
    available: {
      true: {
        base: ["shadow-md"],
      },
      false: {
        base: [],
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    available: true,
  },
});
