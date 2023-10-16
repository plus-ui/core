import { tv } from "tailwind-variants";

export const badgeStyle = tv({
  slots: {
    base: [
      "inline-flex items-center justify-center",
      "flex items-center justify-center flex-row",
      "rounded-full text-center",
      "bg-[--badge-bg] text-[--badge-text]",
      "whitespace-nowrap",
    ],
  },
  variants: {
    size: {
      sm: {
        base: "text-xs min-w-1.5 min-h-1.5",
        dotText: "text-xs px-1.5 min-w-4 p-3",
      },
      md: {
        base: "text-sm min-w-2 min-h-2",
        dotText: "px-1.5 min-w-5",
      },
      lg: {
        base: "text-base min-w-2.5 min-h-2.5",
        dotText: "px-2 min-w-6",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
