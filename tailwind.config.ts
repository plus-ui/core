import type { Config } from 'tailwindcss'

export default {
  content: ["src/**/**/*.{ts,html,css,scss}"],
  theme: {
    extend: {
      fontFamily: {
        ...require('tailwindcss/defaultConfig').theme.fontFamily,
        sans: [
          'Inter',
          ...require('tailwindcss/defaultConfig').theme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
} satisfies Config

