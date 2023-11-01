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
        DEFAULT: "var(--color-shadow)",
        'radio': '0 0 0 0 hsl(0 0% 100%) inset,0 0 0 3px hsl(0 0% 100%) inset',
      }),
      backgroundColor: ({ theme }) => ({
        ...theme("colors"),
        color: {
          ...themeColors.background,
          invert: {
            ...themeColors.backgroundInvert,
          },
        },
      }),
      ringColor: ({ theme }) => ({
        DEFAULT: "var(--color-border-focus)",
        ...theme('colors'),
      }),
      ...themeVariables,
    },
  },
  plugins: [],
} satisfies Config;