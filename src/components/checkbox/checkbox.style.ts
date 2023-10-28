import { tv } from "tailwind-variants";

export const checkboxStyle = tv({
  slots: {
    base: ["font-sans flex w-full flex-row items-center justify-start gap-1.5 font-normal"],
    input: [
      "peer relative appearance-none  flex flex-row items-center justify-center rounded border border-solid border-color-default bg-color-base",
      "active:enabled:bg-color-primary-pressed",
      "hover:bg-color-default-hover checked:hover:enabled:bg-color-primary-hover",
    ],
    icon: ["pointer-events-none absolute ml-[2.5px] hidden flex-row items-center justify-center text-sm text-color-default outline-none peer-checked:flex"],
    label: ["text-base text-color-default"],
  },
  variants: {
    size: {
      sm: {
        input: "h-3 w-3",
      },
      md: {
        input: "h-4 w-4",
      },
      lg: {
        input: "h-5 w-5",
      },
    },
    disabled: {
      true: ""
    },
    readonly: {
      true: ""
    },
    indeterminate: {
      true: {
        input: ["bg-color-primary border-transparent active:bg-color-primary-pressed text-color-base hover:bg-color-primary-hover disabled:bg-color-disabled disabled:text-color-disabled"],
        icon: "text-color-base flex",
      },
    },
    checked: {
      true: {
        input: "bg-color-primary border-transparent active:enabled:bg-color-primary-pressed",
        icon: "text-color-base",
      },
    },
    required: {
      true: {
        label: "after:content-['*'] after:text-color-error after:ml-1",
      }
    },
  },
  compoundVariants: [
    {
      readonly: true,
      class: {
        input: "bg-color-base text-color-default border border-solid border-disabled",
        base: "pointer-events-none",
        icon: "text-color-default",
      }
    },
    {
      disabled: true,
      class: {
        input: "bg-color-disabled border-color-disabled text-color-disabled cursor-not-allowed",
        icon: "text-color-disabled",
        base: "cursor-not-allowed",
        label: "text-color-disabled cursor-not-allowed",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    disabled: false,
    readonly: false,
    indeterminate: false,
    checked: false,
  },
});
