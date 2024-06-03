import { tv } from "tailwind-variants";

export const tabStyle = tv({
  slots: {
    tabItem: ["antialiased font-sans cursor-pointer flex flex-row items-center justify-start  transition-all duration-300 ease-in-out text-color-default w-max"],
    tabHeader: ["flex flex-col items-end justify-start"],
    tabGroup: "",
    tabPanel: [""],
  },

  variants: {
    size: {
      sm: {
        tabItem: ["text-sm gap-1.5 py-1.5 px-2"],
      },
      md: {
        tabItem: ["text-base gap-2 py-2 px-2 "],
      },
      lg: {
        tabItem: ["text-lg gap-2.5 py-2.5 px-2"],
      },
    },
    orientation: {
      vertical: {
        tabHeader: ["flex flex-col items-end justify-start"],
        tabItem: [" border-r border-r-color-default"],
        tabGroup: ["flex flex-row items-start justify-start gap-2"],
      },
      horizontal: {
        tabHeader: ["flex flex-row items-end justify-start"],
        tabItem: [" border-b border-b-color-default"],
        tabGroup: ["flex flex-col items-start justify-start gap-2"],
      },
    },
    active: {
      true: {
        tabItem: ["text-color-primary border-color-primary"],
        tabPanel: ["block"],
      },
      false: {
        tabPanel: ["hidden"],
      },
    },
    disabled: {
      true: {
        tabItem: ["text-color-disabled cursor-not-allowed"],
      },
    },
    truncated: {
      true: {
        tabItem: ["truncate"],
      },
    },
    isRemoved: {
      true: {
        tabItem: ["hidden"],
        tabPanel: ["hidden"],
      },
    },
  },
  defaultVariants: {
    disabled: false,
    readonly: false,
    size: "md",
    active: false,
    orientation: "horizontal",
    truncated: false,
    isRemoved: false,
  },
});
