
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      current: 'currentColor',
      black: colors.black,
      shakingBlack:'#19172E',
      white: colors.white,
      green:"#009C73",
      yellow:colors.yellow,
      gray:colors.gray
    },
  },
  plugins: [],
}