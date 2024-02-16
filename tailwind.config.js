/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    fontFamily: {
      'principal': ["Lato", "sans-serif"],
      'secundary': ["Jura", 'sans-serif']
    },
    colors: {
      'textColor': '#D9D9D9',
      'bgColor': '#0B0B0C',
      'hoverColor': '#1B2624',
    },
    fontSize: {
      sm: '0.625rem',
      base: '0.938rem',
      lg: '1.25rem',
      xl: '1.875rem',
    },
    extend: {},
  },
  plugins: [],
}

