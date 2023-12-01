import { tv } from "tailwind-variants";

export const checkboxGroupStyle = tv({
  slots: {
    host: ["font-sans antialiased flex flex-col  items-start justify-start w-full relative gap-0.5"],
    inputWrapper: ["flex flex-row items-center justify-start gap-2 "],
  },
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },

    orientation: {
      horizontal: {
        inputWrapper: ["flex-row"],
      },
      vertical: {
        inputWrapper: ["flex-col"],
      },
    },
  },
  compoundVariants: [
    {
      size: "sm",
      orientation: "horizontal",
      class: {
        inputWrapper: ["gap-4"],
      },
    },
    {
      size: "sm",
      orientation: "vertical",
      class: {
        inputWrapper: ["gap-2"],
      },
    },
    {
      size: "md",
      orientation: "horizontal",
      class: {
        inputWrapper: ["gap-5"],
      },
    },
    {
      size: "md",
      orientation: "vertical",
      class: {
        inputWrapper: ["gap-2.5"],
      },
    },
    {
      size: "lg",
      orientation: "horizontal",
      class: {
        inputWrapper: ["gap-6"],
      },
    },
    {
      size: "lg",
      orientation: "vertical",
      class: {
        inputWrapper: ["gap-3"],
      },
    },
  ],
  defaultVariants: {
    size: "md",
    orientation: "horizontal",
  },
});
