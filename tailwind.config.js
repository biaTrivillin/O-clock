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
      xxl: '2.5rem',
    },
    extend: {
      keyframes: {
        slideOut: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 0, transform: 'translateX(-500px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(500px)', opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1, transform: 'translateX(0px)' },
        },
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        disappear: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        pop: {
          '0%': { opacity: 0, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.2)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        slideOut: 'slideOut 2s ease-in-out 1 forwards',
        slideIn: 'slideIn 2s ease-in-out 1 forwards',
        appear: 'appear 2s ease-in-out 1 forwards',
        appearImg: 'appear 1s ease-in-out 1.5s 1 forwards',
        disappear: 'disappear 1s ease-in-out 1 forwards',
        pop: 'pop 0.8s ease-in 1.5s 1 forwards',
      },
    }
  },
  plugins: [],
}

