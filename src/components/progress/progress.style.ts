import { tv } from "tailwind-variants";

export const progressStyle = tv({
  slots: {
    host: ["antialiased font-sans flex flex-col w-full font-medium text-default"],
    progress: ["w-full rounded-full bg-color-default transition-colors duration-400 ease-in-out progress relative"],
    progressLine: ["h-full rounded-full"],
    infoArea: ["flex flex-row items-center justify-center gap-2 font-medium"],
  },
  variants: {
    size: {
      sm: {
        host: ["text-xs gap-0.5"],
        progress: ["h-2"],
      },
      md: {
        host: ["text-sm gap-1"],
        progress: ["h-2.5"],
      },
      lg: {
        host: ["text-base gap-1.5"],
        progress: ["h-3"],
      },
    },
    status: {
      success: {
        progressLine: ["bg-color-success"],
        infoArea: ["text-color-success"],
      },
      warning: {
        progressLine: ["bg-color-warning"],
        infoArea: ["text-color-warning"],
      },
      error: {
        progressLine: ["bg-color-error"],
        infoArea: ["text-color-error"],
      },
      info: {
        progressLine: ["bg-color-info"],
        infoArea: ["text-color-info"],
      },
      default: {
        progressLine: ["bg-color-invert-default"],
        infoArea: ["text-color-default"],
      },
    },
    disabled: {
      true: "",
    },
    error: {
      true: "",
    },
    indeterminate: {
      true: {
        progress: ["overflow-hidden"],
        progressLine: ["!w-full animate-progress-indeterminate"],
      }
    },
  },
  compoundVariants: [
    {
      disabled: true,
      class: {
        host: ["text-color-disabled cursor-not-allowed"],
        progress: ["bg-color-disabled"],
        progressLine: ["bg-color-disabled"],
        infoArea: ["text-color-disabled"],
      },
    },
  ],
  defaultVariants: {
    size: "md",
    status: "default",
    disabled: false,
    error: false,
    indeterminate: false,
  },
});
