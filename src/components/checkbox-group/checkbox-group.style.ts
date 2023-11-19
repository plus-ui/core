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

    aligment: {
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
      aligment: "horizontal",
      class: {
        inputWrapper: ["gap-4"],
      },
    },
    {
      size: "sm",
      aligment: "vertical",
      class: {
        inputWrapper: ["gap-2"],
      },
    },
    {
      size: "md",
      aligment: "horizontal",
      class: {
        inputWrapper: ["gap-5"],
      },
    },
    {
      size: "md",
      aligment: "vertical",
      class: {
        inputWrapper: ["gap-2.5"],
      },
    },
    {
      size: "lg",
      aligment: "horizontal",
      class: {
        inputWrapper: ["gap-6"],
      },
    },
    {
      size: "lg",
      aligment: "vertical",
      class: {
        inputWrapper: ["gap-3"],
      },
    },
  ],
  defaultVariants: {
    size: "md",
    aligment: "horizontal",
  },
});
