/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '410px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: {
          main: "#6F4FF8",
          dark: "#5623D8",
          suface: "#2E1C7B",
          border: "#9B87FF"
        },
        neutral: {
          900: "#101223",
          800: "#2F334C",
          700: "#4A4D62",
          400: "#9FA1AD",
          300: "#B9B9B9",
          200: "#444444",
          100: "#F9F9FF",
          50: "#FFF9F9",
          0: "#FFFFFF",
        },
        background: {
          main: "#191B2C"
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'grid-pattern': "url('assets/images/Back.svg')",
      }
    },
  },
  plugins: [],
}