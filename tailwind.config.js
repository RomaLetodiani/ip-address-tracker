/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: '#2b2b2b',
        secondary: '#969696',
      },
      screens: {
        xs: '480px',
        sm: '1000px',
      },
    },
  },
  plugins: [],
};
