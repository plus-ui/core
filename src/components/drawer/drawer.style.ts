import { tv } from "tailwind-variants";

export const drawerStyle = tv({
  slots: {
    base: ["plus-drawer font-sans antialiased"],
    drawerOverlay: ["drawer-overlay fixed inset-0 z-40 bg-black bg-opacity-50"],
    drawerClass: ["drawer fixed z-50 h-full overflow-y-auto"],
    drawerContainer: ["drawer-container relative w-full h-full bg-color-base shadow-xl text-base flex flex-col justify-between"],
    drawerHeader: ["drawer-header flex justify-between items-center py-3 px-4 bg-color-base font-semibold text-lg rounded-t-lg border-b border-color-default"],
    drawerBody: ["drawer-body flex-1 p-4"],
    drawerFooter: ["drawer-footer flex justify-end items-center py-3 px-4 gap-2 rounded-b-lg"],
    drawerCloseButtonClass: ["drawer-close-button absolute top-0 right-0 p-3 text-color-default"],
  },
  variants: {
    size: {
      xs: {
        base: [],
        drawerContainer: [],
      },
      sm: {
        base: [],
        drawerContainer: [],
      },
      md: {
        base: [],
        drawerContainer: [],
      },
      lg: {
        base: [],
        drawerContainer: [],
      },
    },
    isOpen: {
      true: {
        drawerClass: ["block"],
        drawerOverlay: ["block"],
      },
      false: {
        drawerClass: ["hidden"],
        drawerOverlay: ["hidden"],
      },
    },
    orientation: {
      left: {
        drawerClass: ["h-full max-w-lg inset-y-0 left-0"],
        drawerContainer: "overflow-y-auto",
      },
      right: {
        drawerClass: ["h-full max-w-lg inset-y-0 right-0"],
        drawerContainer: "overflow-y-auto",
      },
      top: {
        drawerClass: ["h-96 w-full inset-x-0 top-0"],
        drawerContainer: "overflow-x-auto",
      },
      bottom: {
        drawerClass: ["bottom-0 h-96 w-full inset-x-0"],
        drawerContainer: "overflow-x-auto",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    isOpen: false,
    orientation: "right",
  },
});
