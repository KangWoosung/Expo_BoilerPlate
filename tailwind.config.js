/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        ElMessiriBold: ['ElMessiriBold'],
        ElMessiriMedium: ['ElMessiriMedium'],
        ElMessiriRegular: ['ElMessiriRegular'],
        ElMessiriSemiBold: ['ElMessiriSemiBold']
      },
      colors:{
        primary:'#8E6B68',
        secondary:'#F8F8F8',
        gray:'#CFCFCF',
        cardbg:'#FFF7F7'
      }
    },
  },
  plugins: [],
};
