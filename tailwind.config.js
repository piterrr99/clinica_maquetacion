/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      playfairdisplay: ["PlayfairDisplay", "sans-serif"],
      roboto: ["Roboto", "sans-serif"]
    },
    extend: {
      colors:{
        'pale-pink':'#D7BDAE',
        'dark-gray':'#2D2E30',
      },
      screens:{
        'smer': { 'raw': '(min-width: 540px)'},
        'lger': { 'raw': '(min-width: 1200px)'},
      },
    },
  },
  plugins: [],
}

