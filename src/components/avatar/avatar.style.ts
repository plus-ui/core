import { tv } from "tailwind-variants";

export const avatarStyle = tv({
  slots: {
    base: "uppercase flex items-center justify-center font-sans text-[--text-default] bg-[--background-default-default]",
    image: "w-full h-full",
  },
  variants: {
    size: {
      xs: "text-xs w-5 h-5",
      sm: "text-sm w-6 h-6",
      md: "text-base w-9 h-9",
      lg: "text-lg w-10 h-10",
      xl: "text-xl w-11 h-11",
      custom: "text-[calc(var(--size)/2)] w-[--size] h-[--size]"
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
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
  },
});
