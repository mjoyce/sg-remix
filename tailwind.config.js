/** @type {import('tailwindcss').Config} */

const white = '#ffffff';
const green = '#5bbc71';
const lightgreen = '#eef8f1';
const orange = '#eb695b';
const blue = '#163a5f';

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: green,
          'primary-content': white,
          secondary: orange,
          'secondary-content': white,
          accent: lightgreen,
          'accent-content': green,
          neutral: blue,
          'neutral-content': white,
          'base-100': white,
          'base-200': '#fafafa',
          'base-300': '#dee0e2',
          'base-content': '#576472',
          info: '#3abff8',
          'info-content': white,
          success: '#36d399',
          'success-content': white,
          warning: '#ecc063',
          'warning-content': white,
          error: '#eb596b',
          'error-content': white,

          '--rounded-box': '0.5rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.25rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // slcale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
