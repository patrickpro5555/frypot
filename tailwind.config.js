const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        secondary: colors.green,
        success: colors.lime,
        danger: colors.rose,
        warning: colors.yellow,
        info: colors.indigo
      }
    },
  },
  plugins: [],
} 
