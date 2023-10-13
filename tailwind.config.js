/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        colorGreen: '#7AA65A',
        colorWhite: '#feffff',
        fondo: '#e6f6f9',
      },
      screens: {
        'xs': {'max': '639px'},
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
