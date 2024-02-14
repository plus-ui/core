import { tv } from "tailwind-variants";

export const modalStyle = tv({
  slots: {
    base: ["plus-modal font-sans antialiased"],
    modalOverlay: ["modal-overlay fixed inset-0 z-40 bg-black bg-opacity-50"],
    modalClass: ["modal fixed z-50 inset-0 overflow-y-auto p-4"],
    modalContainer: ["modal-container relative w-full mx-auto my-8 bg-color-surface-base rounded-lg shadow-xl text-base"],
    modalHeader: ["modal-header flex justify-between items-center py-3 px-4 bg-color-default font-semibold rounded-t-lg"],
    modalBody: ["modal-body p-4"],
    modalFooter: ["modal-footer flex justify-end items-center py-3 px-4 gap-2 rounded-b-lg"],
    modalCloseButtonClass: ["modal-close-button absolute top-0 right-0 p-3 text-color-default"],
  },
  variants: {
    size: {
      xs: {
        base: [],
        modalContainer: ["max-w-xl"],
      },
      sm: {
        base: [],
        modalContainer: ["max-w-3xl"],
      },
      md: {
        base: [],
        modalContainer: ["max-w-5xl"],
      },
      lg: {
        base: [],
        modalContainer: ["max-w-7xl"],
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
  },
});
