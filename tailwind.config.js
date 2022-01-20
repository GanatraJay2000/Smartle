const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
          poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
          lato: ['Lato'],
      },
    },
  },
  plugins: [],
}
