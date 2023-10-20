export const themeVariables = {
  spacing: {
    px: "var(--spacing-px, 0.0625rem)",
    0: "var(--spacing-0, 0rem)",
    0.5: "var(--spacing-0-5, 0.125rem)",
    1: "var(--spacing-1, 0.25rem)",
    1.5: "var(--spacing-1-5, 0.375rem)",
    2: "var(--spacing-2, 0.5rem)",
    2.5: "var(--spacing-2-5, 0.625rem)",
    3: "var(--spacing-3, 0.75rem)",
    3.5: "var(--spacing-3-5, 0.875rem)",
    4: "var(--spacing-4, 1rem)",
    5: "var(--spacing-5, 1.25rem)",
    6: "var(--spacing-6, 1.5rem)",
    7: "var(--spacing-7, 1.75rem)",
    8: "var(--spacing-8, 2rem)",
    9: "var(--spacing-9, 2.25rem)",
    10: "var(--spacing-10, 2.5rem)",
    11: "var(--spacing-11, 2.75rem)",
    12: "var(--spacing-12, 3rem)",
    14: "var(--spacing-14, 3.5rem)",
    16: "var(--spacing-16, 4rem)",
    20: "var(--spacing-20, 5rem)",
    24: "var(--spacing-24, 6rem)",
    28: "var(--spacing-28, 7rem)",
    32: "var(--spacing-32, 8rem)",
    36: "var(--spacing-36, 9rem)",
    40: "var(--spacing-40, 10rem)",
    44: "var(--spacing-44, 11rem)",
    48: "var(--spacing-48, 12rem)",
    52: "var(--spacing-52, 13rem)",
    56: "var(--spacing-56, 14rem)",
    60: "var(--spacing-60, 15rem)",
    64: "var(--spacing-64, 16rem)",
    72: "var(--spacing-72, 18rem)",
    80: "var(--spacing-80, 20rem)",
    96: "var(--spacing-96, 24rem)",
  },

  /* fontSize */
  fontSize: {
    "xs": ["var(--font-size-xs, 0.75rem)", { lineHeight: "var(--font-size-xs-line-height, 1rem)" }],
    "sm": ["var(--font-size-sm, 0.875rem)", { lineHeight: "var(--font-size-sm-line-height, 1.25rem)" }],
    "base": ["var(--font-size-base, 1rem)", { lineHeight: "var(--font-size-base-line-height, 1.5rem)" }],
    "lg": ["var(--font-size-lg, 1.125rem)", { lineHeight: "var(--font-size-lg-line-height, 1.75rem)" }],
    "xl": ["var(--font-size-xl, 1.25rem)", { lineHeight: "var(--font-size-xl-line-height, 1.75rem)" }],
    "2xl": ["var(--font-size-2xl, 1.5rem)", { lineHeight: "var(--font-size-2xl-line-height, 2rem)" }],
    "3xl": ["var(--font-size-3xl, 1.875rem)", { lineHeight: "var(--font-size-3xl-line-height, 2.25rem)" }],
    "4xl": ["var(--font-size-4xl, 2.25rem)", { lineHeight: "var(--font-size-4xl-line-height, 2.5rem)" }],
    "5xl": ["var(--font-size-5xl, 3rem)", { lineHeight: "var(--font-size-5xl-line-height, 1)" }],
    "6xl": ["var(--font-size-6xl, 3.75rem)", { lineHeight: "var(--font-size-6xl-line-height, 1)" }],
    "7xl": ["var(--font-size-7xl, 4.5rem)", { lineHeight: "var(--font-size-7xl-line-height, 1)" }],
    "8xl": ["var(--font-size-8xl, 6rem)", { lineHeight: "var(--font-size-8xl-line-height, 1)" }],
    "9xl": ["var(--font-size-9xl, 8rem)", { lineHeight: "var(--font-size-9xl-line-height, 1)" }],
    "size-inherit": ["inherit", { lineHeight: "inherit" }],
  },
};

export const themeColors = {
  border: {
    primary: "var(--border-primary)",
    focus: "var(--border-focus)",
    disabled: "var(--border-disabled)",
    error: "var(--border-error)",
    success: "var(--border-success)",
    warning: "var(--border-warning)",
    default: "var(--border-default)",
    information: "var(--border-information)",
  },
  text: {
    base: "var(--text-base)",
    default: "var(--text-default)",
    primary: "var(--text-primary)",
    placeholder: "var(--text-placeholder)",
    link: "var(--text-link)",
    caption: "var(--text-caption)",
    visited: "var(--text-visited)",
    disabled: "var(--text-disabled)",
    error: "var(--text-error)",
    success: "var(--text-success)",
    warning: "var(--text-warning)",
    information: "var(--text-information)",
  },
  textInvert: {
    base: "var(--text-invert-base)",
    default: "var(--text-invert-default)",
    primary: "var(--text-invert-primary)",
    placeholder: "var(--text-invert-placeholder)",
    link: "var(--text-invert-link)",
    caption: "var(--text-invert-caption)",
    visited: "var(--text-invert-visited)",
    disabled: "var(--text-invert-disabled)",
    error: "var(--text-invert-error)",
    success: "var(--text-invert-success)",
    warning: "var(--text-invert-warning)",
    information: "var(--text-invert-information)",
  },
  background: {
    default: {
      DEFAULT: "var(--background-default-default)",
      hover: "var(--background-default-hover)",
      pressed: "var(--background-default-pressed)",
      focus: "var(--background-default-focus)",
    },
    disabled: "var(--background-disabled)",
    primary: {
      DEFAULT: "var(--background-primary-default)",
      hover: "var(--background-primary-hover)",
      pressed: "var(--background-primary-pressed)",
      focus: "var(--background-primary-focus)",
    },
    base: {
      DEFAULT: "var(--background-base-default)",
      hover: "var(--background-base-hover)",
      pressed: "var(--background-base-pressed)",
      focus: "var(--background-base-focus)",
    },
    success: {
      DEFAULT: "var(--background-success-default)",
      hover: "var(--background-success-hover)",
      pressed: "var(--background-success-pressed)",
      focus: "var(--background-success-focus)",
    },
    warning: {
      DEFAULT: "var(--background-warning-default)",
      hover: "var(--background-warning-hover)",
      pressed: "var(--background-warning-pressed)",
      focus: "var(--background-warning-focus)",
    },
    error: {
      DEFAULT: "var(--background-error-default)",
      hover: "var(--background-error-hover)",
      pressed: "var(--background-error-pressed)",
      focus: "var(--background-error-focus)",
    },
    information: {
      DEFAULT: "var(--background-information-default)",
      hover: "var(--background-information-hover)",
      pressed: "var(--background-information-pressed)",
      focus: "var(--background-information-focus)",
    },
  },
  backgroundInvert: {
    default: {
      DEFAULT: "var(--background-default-invert-default)",
      hover: "var(--background-default-invert-hover)",
      pressed: "var(--background-default-invert-pressed)",
      focus: "var(--background-default-invert-focus)",
    },
    primary: {
      DEFAULT: "var(--background-primary-invert-default)",
      hover: "var(--background-primary-invert-hover)",
      pressed: "var(--background-primary-invert-pressed)",
      focus: "var(--background-primary-invert-focus)",
    },
    success: {
      DEFAULT: "var(--background-success-invert-default)",
      hover: "var(--background-success-invert-hover)",
      pressed: "var(--background-success-invert-pressed)",
      focus: "var(--background-success-invert-focus)",
    },
    warning: {
      DEFAULT: "var(--background-warning-invert-default)",
      hover: "var(--background-warning-invert-hover)",
      pressed: "var(--background-warning-invert-pressed)",
      focus: "var(--background-warning-invert-focus)",
    },
    error: {
      DEFAULT: "var(--background-error-invert-default)",
      hover: "var(--background-error-invert-hover)",
      pressed: "var(--background-error-invert-pressed)",
      focus: "var(--background-error-invert-focus)",
    },
    information: {
      DEFAULT: "var(--background-information-invert-default)",
      hover: "var(--background-information-invert-hover)",
      pressed: "var(--background-information-invert-pressed)",
      focus: "var(--background-information-invert-focus)",
    },
  },
  surface: {
    base: "var(--surface-base)",
  },
};
