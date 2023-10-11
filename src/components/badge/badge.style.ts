import { tv } from "tailwind-variants";

export const badgeStyle = tv({
    slots: {
        base: [
            "inline-flex items-center justify-center",
            "flex items-center justify-center flex-row",
            "rounded-full text-center",
            "bg-[--plus-badge-bg] text-[--plus-badge-text]",
            "whitespace-nowrap",
        ],
    },

    variants: {
        size: {
            small: {
                base: "text-1 min-w-1.5 min-h-1.5",
                dotText: "px-1.5 min-w-4",
            },
            medium: {
                base: "text-2 min-w-2 min-h-2",
                dotText: "px-1.5 min-w-5",
            },
            large: {
                base: "text-3 min-w-2.5 min-h-2.5",
                dotText: "px-2 min-w-6",
            },
        },
    },
    defaultVariants: {
        size: "medium",
    },
});
