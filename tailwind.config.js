/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d32f2f',
          dark: '#b71c1c',
          light: '#ef5350',
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#d32f2f',
          600: '#c62828',
          700: '#b71c1c',
          800: '#9e1818',
          900: '#891414',
        },
        secondary: {
          DEFAULT: '#212121',
          light: '#484848',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#FFC107',
          dark: '#FFA000',
          light: '#FFECB3',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 