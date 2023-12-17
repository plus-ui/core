import { tv } from "tailwind-variants";

export const breadCrumbItemStyle = tv({
  slots: {
    host: "font-sans antialised flex flex-row items-center justify-start gap-3 outline-none transition-colors duration-200 ease-in-out",
    separator: "plus-separator text-color-default",
    linkClass: "flex flex-row items-center justify-start visited:text-color-visited text-color-link hover:underline",
  },
  variants: {
    size: {
      sm: {
        host: "text-sm gap-1.5",
        linkClass: "text-sm gap-1.5",
        separator: "text-sm",
      },
      md: {
        host: "text-base gap-2",
        linkClass: "text-base gap-2",
        separator: "text-base",
      },
      lg: {
        host: "text-lg gap-2.5",
        linkClass: "text-lg gap-2.5",
        separator: "text-lg",
      },
    },
    disabled: {
      true: {},
    },
    readonly: {
      true: "",
    },
    active: {
      true: {
        linkClass: "text-default",
      },
    },
  },
  compoundVariants: [
    {
      disabled: true,
      class: {
        linkClass: "text-color-disabled cursor-not-allowed hover:no-underline visited:text-color-disabled",
      },
    },
    {
      readonly: true,
      class: {
        linkClass: "text-color-default user-select-none pointer-events-none",
      },
    },
    {
      disabled: false,
      class: {
        linkClass: "visited:text-color-visited",
      },
    },
    {
      disabled: false,
      active: true,
      class: {
        linkClass: "text-color-default visited:text-color-default",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    active: false,
    disabled: false,
    readonly: false,
  },
});
