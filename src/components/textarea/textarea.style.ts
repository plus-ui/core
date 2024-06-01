import { tv } from "tailwind-variants";
import { inputStyle } from "../input/input.style";

export const textareaStyle = tv({
  extend: inputStyle,
  slots: {
    inputElement: "rounded-md",
  },
  variants: {
    size: {
      sm: {
        inputWrapper: "p-0",
        inputElement: "py-2 px-2",
      },
      md: {
        inputWrapper: "p-0",
        inputElement: "py-2 px-3",
      },
      lg: {
        inputWrapper: "p-0",
        inputElement: "py-2 px-4",
      },
    },
    resize: {
      none: {
        inputElement: "!resize-none",
      },
      both: {
        inputElement: "!resize",
      },
      horizontal: {
        inputElement: "!resize-x",
      },
      vertical: {
        inputElement: "!resize-y",
      },
    },
  },
  defaultVariants: {
    focus: false,
    error: false,
    disabled: false,
    size: "md",
  },
});
