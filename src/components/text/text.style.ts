import { tv } from "tailwind-variants";

export const textStyle = tv({
  slots: {
    base: ["inline font-sans text-base font-normal"],
  },
  variants: {
    kind: {
      default: { base: "text-color-default" },
      placeholder: { base: "text-color-placeholder" },
      caption: { base: "text-color-caption" },
    },
    type: {
      p: { base: "" },
      code: { base: " font-mono border border-color-default rounded-sm px-1 bg-color-default" },
      blockquote: { base: "font-serif border-l-4 border-color-default pl-2" },
      h1: { base: "text-7xl" },
      h2: { base: "text-6xl" },
      h3: { base: "text-5xl" },
      h4: { base: "text-4xl" },
      h5: { base: "text-3xl" },
      h6: { base: "text-2xl" },
    } as any,
    size: {
      "xs": { base: "text-xs" },
      "sm": { base: "text-sm" },
      "base": { base: "" },
      "lg": { base: "text-lg" },
      "xl": { base: "text-xl" },
      "2xl": { base: "text-2xl" },
      "3xl": { base: "text-3xl" },
      "4xl": { base: "text-4xl" },
      "5xl": { base: "text-5xl" },
      "6xl": { base: "text-6xl" },
      "7xl": { base: "text-7xl" },
      "8xl": { base: "text-8xl" },
      "9xl": { base: "text-9xl" },
      "inherit": { base: "text-size-inherit" },
    } as any,
    strong: {
      true: { base: "font-semibold" },
    },
    italic: {
      true: { base: "italic" },
    },
    status: {
      default: { base: "" },
      success: { base: "text-color-success" },
      warning: { base: "text-color-warning" },
      error: { base: "text-color-error" },
      info: { base: "text-color-information" },
    },
    disabled: {
      true: { base: "text-color-disabled" },
    },
    highlight: {
      true: { base: "bg-color-invert-warning" },
    },
  },
  defaultVariants: {
    kind: "default",
    status: "default",
    disabled: false,
    highlight: false,
    strong: false,
    italic: false,
    size: "base",
    type: "p",
  },
});
