import { tv } from "tailwind-variants";

export const tooltipStyle = tv({
  slots: {
    base: ["plus-tooltip font-sans antialiased", "rounded bg-color-invert-default text-color-base"],
    descriptionClass: [""],
    messageClass: ["font-medium"],
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