import { tv } from "tailwind-variants";

export const radioStyle = tv({
  slots: {
    base: "flex items-center justify-start gap-1.5 font-sans",
    radio: ["radio bg-default-base shrink-0 cursor-pointer appearance-none rounded-full border border-solid border-color-default"],
    hover: "bg-color-default-hover active:bg-color-default-pressed",
    labelClass: "text-color-default font-normal",
  },
  variants: {
    size: {
      sm: {
        radio: "h-3.5 w-3.5",
        labelClass: "text-sm",
      },
      md: {
        radio: "h-4 w-4",
        labelClass: "text-base",
      },
      lg: {
        radio: "h-5 w-5",
        labelClass: "text-lg",
      },
    },
    disabled: {
      true: {
        base: "cursor-not-allowed",
        radio: "bg-color-disabled border-color-disabled cursor-not-allowed",
        labelClass: "text-color-disabled cursor-not-allowed",
      },
    },
    readonly: {
      true: {
        base: "pointer-events-none",
        radio: "bg-color-base border-color-disabled",
      },
    },
    checked: {
      true: {
        radio: "shadow-radio bg-color-primary border-color-primary",
      },
    },
    required: {
      true: {
        labelClass: "after:content-['*'] after:text-color-error after:ml-1",
      },
    },
  },
  compoundVariants: [
    {
      checked: false,
      disabled: false,
      readonly: false,
      class: {
        radio: "hover:bg-color-default-hover active:bg-color-default-pressed",
      },
    },
    {
      checked: true,
      disabled: false,
      readonly: false,
      class: {
        radio: "hover:ring-4 ring-color-invert-primary-hover ring-inset active:ring-4 ring-color-invert-primary-pressed ring-inset",
      },
    },
    {
      required: true,
      disabled: true,
      class: {
        labelClass: "after:text-color-disabled",
      },
    },
    {
      required: true,
      readonly: true,
      class: {
        labelClass: "after:text-color-default",
      },
    },
    {
      readonly: true,
      checked: true,
      class: {
        radio: "bg-color-invert-default border-color-disabled",
      },
    },
    {
      disabled: true,
      checked: true,
      class: {
        radio: "bg-gray-400 border-color-disabled",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    disabled: false,
    readonly: false,
    checked: false,
  },
});
