import { tv } from "tailwind-variants";

export const modalStyle = tv({
  slots: {
    base: ["plus-modal font-sans antialiased text-color-default"],
    modalOverlay: ["modal-overlay fixed inset-0 z-40 bg-black bg-opacity-50"],
    modalClass: ["modal fixed z-50 inset-0 overflow-y-auto p-4"],
    modalContainer: ["modal-container relative w-full mx-auto my-8 bg-color-base rounded-lg shadow-xl text-base"],
    modalHeader: ["modal-header flex justify-between items-center bg-color-base font-semibold  rounded-t-lg border-b border-color-default"],
    modalBody: ["modal-body "],
    modalFooter: ["modal-footer flex justify-end items-center  gap-2 rounded-b-lg"],
    modalCloseButtonClass: ["modal-close-button absolute top-0 right-0 text-color-default"],
  },
  variants: {
    size: {
      xs: {
        base: [],
        modalContainer: ["max-w-xl"],
        modalHeader: ["text-base py-3 px-5"],
        modalCloseButtonClass: ["text-sm py-3.5 px-4"],
        modalBody: ["px-4"],
        modalFooter: ["p-4"],
      },
      sm: {
        base: [],
        modalContainer: ["max-w-3xl"],
        modalHeader: ["text-base py-3 px-5"],
        modalCloseButtonClass: ["text-sm py-3.5 px-4"],
        modalBody: ["px-4"],
        modalFooter: ["p-4"],
      },
      md: {
        base: [],
        modalContainer: ["max-w-4xl"],
        modalHeader: ["text-lg py-3.5 px-5"],
        modalCloseButtonClass: ["text-md py-4 px-5"],
        modalBody: ["px-5"],
        modalFooter: ["p-5"],
      },
      lg: {
        base: [],
        modalContainer: ["max-w-5xl"],
        modalHeader: ["text-xl py-4 px-6"],
        modalCloseButtonClass: ["text-lg py-4 px-6"],
        modalBody: ["px-6"],
        modalFooter: ["p-6"],
      },
    },
    isOpen: {
      true: {
        modalClass: ["block"],
        modalOverlay: ["block"],
      },
      false: {
        modalClass: ["hidden"],
        modalOverlay: ["hidden"],
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    isOpen: false,
  },
});
