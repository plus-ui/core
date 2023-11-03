import { tv } from "tailwind-variants";

export const breadCrumbItemStyle = tv({
  slots: {
    main: "inline-flex items-center justify-center gap-2.5 font-sans text-base",
    linkClass: "flex flex-row gap-1 items-center justify-center text-color-link text-color-link visited:text-color-visited",
    seperator: "text-color-default text-base",
    hrefClass: "text-color-link visited:text-color-visited",
  },
  variants: {
    size: {
      sm: {
        main: "text-sm",
      },
      md: {
        main: "text-base",
      },
      lg: {
        main: "text-lg",
      },
    },
    active: {
      true: "",
      false: {
        hrefClass: "visited:text-color-visited",
      }
    },
    disabled: {
      true: ""
    },
    readonly: {
      true:{
        hrefClass: "text-color-caption visited:text-color-caption pointer-events-none",
        linkClass: "text-color-caption pointer-events-none",
        main: "text-color-caption pointer-events-none",
      }
    },
  },
  compoundVariants: [
    {
      disabled: false,
      readonly: false,
      active: false,
      class:{
        hrefClass: "text-color-link",
      }
    },
    {
      active: true,
      disabled: false,
      readonly: false,
      class:{
        hrefClass: "text-color-default pointer-events-none visited:text-color-default",
        linkClass: "text-color-default",
      }
    },
    {
      disabled: true,
      class:{
        hrefClass: "visited:text-color-disabled text-color-disabled cursor-not-allowed pointer-events-none",
        linkClass: "text-color-disabled cursor-not-allowed",
        main: "text-color-disabled cursor-not-allowed",
      }
    },
    {
      active:false,
      readonly: true,
      class:{
        hrefClass: "visited:text-color-caption text-color-caption pointer-events-none",
        linkClass: "text-color-caption",
      }
    },
  ],
  defaultVariants: {
    size: "md",
    active: false,
    disabled: false,
    readonly: false,
  },
});
