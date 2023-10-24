import { tv } from "tailwind-variants";

export const avatarStyle = tv({
  slots: {
    base: "uppercase flex items-center justify-center font-sans",
    image: "w-full h-full",
  },
  variants: {
    size: {
      xs: "text-xs w-4 h-4",
      sm: "text-xs w-6 h-6",
      md: "text-sm w-9 h-9",
      lg: "text-base w-10 h-10",
      xl: "text-lg w-11 h-11",
      custom: "text-[calc(var(--size)/2.50)] w-[--size] h-[--size]"
    },
    shape: {
      circle: {
        base: "rounded-full",
        image: "rounded-full",
      },
      square: {
        base: "rounded",
        image: "rounded-none",
      },
    },
    invert: {
      true: "bg-color-invert-default text-color-invert-default",
      false: "bg-color-default text-color-default",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
    invert: false,
  },
});
