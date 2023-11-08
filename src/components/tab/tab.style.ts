import { tv } from "tailwind-variants";

export const tabStyle = tv({
  slots: {
    host: ["antialiased font-sans flex flex-col items-center justify-center w-full"],
    tab: ["flex-1 flex-row items-center justify-center gap-2 cursor-pointer relative"],
    inkBar: ["absolute -bottom-[4px] left-0 h-[2px] w-full rounded-sm bg-color-primary transition-transform transform-gpu"],
  },
  variants: {
    checked: {
      true: {
        radioDot: ["scale-100 text-color-primary"],
        radio: ["border-color-primary"],
      },
    },
    focus: {
      true: {
        radio: "ring-2 ring-offset-2 z-[1] border-color-primary",
      },
      false: [""],
    },
    readonly: {
      true: {
        base: ["cursor-default"],
        radio: ["bg-color-base", "border-color-disabled"],
      },
    },
    disabled: {
      true: {
        base: ["cursor-not-allowed text-color-disabled"],
        radio: ["bg-color-disabled", "border-color-disabled"],
      },
    },
    active:{
        true: "",
        false: ""
    },
    size: {
      sm: {
        host: ["text-sm gap-1.5"],
      },
      md: {
        host: ["text-base gap-2"],
      },
      lg: {
        host: ["text-lg gap-2.5"],
      },
    },
  },
  compoundVariants: [
    
  ],
  defaultVariants: {
    disabled: false,
    readonly: false,
    size: "md",
    active:false
  },
});
