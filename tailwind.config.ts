import type { Config } from 'tailwindcss'
import { plusTwConfig } from './plus-tw-config'

export default {
  content: ["src/**/**/*.{ts,html,css,scss}"],
  theme: {
    extend: {
      ...require('tailwindcss/defaultConfig').theme,
      fontFamily: {
        ...require('tailwindcss/defaultConfig').theme.fontFamily,
        sans: [
          'Inter',
          ...require('tailwindcss/defaultConfig').theme.fontFamily.sans,
        ],
      },
      minHeight: ({ theme }) => ({
        ...theme('spacing'),
        ...require('tailwindcss/defaultConfig').theme.minHeight,
      }),
      minWidth: ({ theme }) => ({
        ...theme('spacing'),
        ...require('tailwindcss/defaultConfig').theme.minWidth,
      }),
      ...plusTwConfig,
    },
  },
  plugins: [],
} satisfies Config

