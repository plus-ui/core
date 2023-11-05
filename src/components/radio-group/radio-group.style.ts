import { tv } from "tailwind-variants";

export const radioGroupStyle = tv({
    slots: {
        host: ["antialiased font-sans text-base flex flex-row gap-2 items-start justify-start w-full relative"],
    },
    variants: {
      aligment: {
        horizontal: {
          host: ["flex-row"],
        },
        vertical: {
          host: ["flex-col"],
        },
      },
    },
    compoundVariants: [],
    defaultVariants: {
      aligment: "horizontal",
    },
  });