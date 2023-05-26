/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      colors:{
        'pale-pink':'#D7BDAE',
      },
      screens:{
        'lger': { 'raw': '(min-width: 1200px)'},
      },
    },
  },
  plugins: [],
}

