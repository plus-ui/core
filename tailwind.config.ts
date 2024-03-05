import type { Config } from "tailwindcss";
import { themeColors, themeVariables } from "./theme-variables";

export default {
  content: ["src/**/**/*.{ts,html,css,scss}"],
  theme: {
    extend: {
      ...require("tailwindcss/defaultConfig").theme,
      fontFamily: {
        ...require("tailwindcss/defaultConfig").theme.fontFamily,
        sans: ["Inter", ...require("tailwindcss/defaultConfig").theme.fontFamily.sans],
      },
      colors: ({  colors }) => ({
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        primaryColor: colors.blue
      }),
      minHeight: ({ theme }) => ({
        ...theme("spacing"),
        ...require("tailwindcss/defaultConfig").theme.minHeight,
      }),
      minWidth: ({ theme }) => ({
        ...theme("spacing"),
        ...require("tailwindcss/defaultConfig").theme.minWidth,
      }),
      maxWidth: ({ theme }) => ({
        ...theme("spacing"),
        ...require("tailwindcss/defaultConfig").theme.maxWidth,
      }),
      maxHeight: ({ theme }) => ({
        ...theme("spacing"),
        ...require("tailwindcss/defaultConfig").theme.maxHeight,
      }),
      textColor: ({ theme }) => ({
        ...theme("colors"),
        color: {
          ...themeColors.text,
          invert: {
            ...themeColors.textInvert,
          },
        },
      }),
      placeholderColor: ({ theme }) => ({
        ...theme("textColor"),
      }),

      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.200", "currentColor"),
        color: {
          ...themeColors.border,
        },
      }),
      boxShadow: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: "var(--plusui-color-shadow)",
      }),
      backgroundColor: ({ theme }) => ({
        ...theme("colors"),
        color: {
          ...themeColors.background,
          invert: {
            ...themeColors.backgroundInvert,
          },
          surface: {
            ...themeColors.surface,
          },
        },
      }),
      ringColor: ({ theme }) => ({
        DEFAULT: "var(--plusui-color-border-focus)",
        ...theme('colors'),
      }),
      animation: {
        ...require("tailwindcss/defaultConfig").theme.animation,
        "progress-indeterminate": "progress-indeterminate 3s infinite ease-in-out",
      },
      keyframes: {
        ...require("tailwindcss/defaultConfig").theme.keyframes,
        "progress-indeterminate": {
          "0%": { transform: "translateX(-100%) scaleX(0.3)" },
          "50%": { transform: "translateX(0%) scaleX(0.3)" },
          "100%": { transform: "translateX(100%) scaleX(0.3)" },
        },
      },
      ...themeVariables,
    },
  },
  plugins: [],
} satisfies Config;