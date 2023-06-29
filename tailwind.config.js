/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',   'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#6F55DA',
      white: '#fff',
      white100: '#EFECE6',
      black: '#000',
      black100: '#040503',
      gray: '#979797',
      gray200: '#F9F9F9',
      gray300: '#7B7B7B',
      gray400: '#B3B3B3',
      primary100: 'rgba(111, 85, 218, 0.1)',
      border100: 'rgba(151, 151, 151, 0.5)',
      green100: `#35A333`,
    },
    extend: {
      boxShadow: {
        '3xl': '0px 0px 25px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'default-bg-img': "url('./assets/img/bg.png')",
        'mystery-bg': "url('./assets/img/mystery-bg.svg')",
      },
    },
  },

  plugins: [require('@tailwindcss/aspect-ratio'), require('flowbite/plugin')],
};
