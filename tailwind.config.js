/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors:{
      primary: '#6F55DA',
      white: '#fff',
      black: '#000',
      gray:'#979797',
      gray200:'#F9F9F9',
      gray300:'#7B7B7B',
      primary100:'rgba(111, 85, 218, 0.1)',
      border100:'rgba(151, 151, 151, 0.5)'
    },
    extend: {
      boxShadow: {
        '3xl': '0px 0px 25px rgba(0, 0, 0, 0.06)',
      }

    },
  },
  plugins: [],
};
