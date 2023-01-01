/** @type {import('tailwindcss').Config} */

const blue = '#163a5f';
const gray100 = '#fafafa';
const gray200 = '#dee0e2';
const gray300 = '#576472';
const green100 = '#eef8f1';
const green200 = '#5bbc71';
const orange = '#eb695b';
const white = '#ffffff';

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
      },
    },
    colors: {
      blue,
      gray100,
      gray200,
      gray300,
      green100,
      green200,
      orange,
      white,
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
