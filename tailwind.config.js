/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Also prepare for App Router
  ],
  theme: {
    extend: {
      colors: {
        usaRed: '#B22234', // US flag red
        usaBlue: '#3C3B6E', // US flag blue
        usaWhite: '#FFFFFF', // US flag white
      },
    },
  },
  plugins: [],
};
