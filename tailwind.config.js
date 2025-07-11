/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        // USA Flag Official Colors
        'usa-red': '#B22234',  // Old Glory Red
        'usa-blue': '#3C3B6E', // Old Glory Blue
        'usa-white': '#FFFFFF',
        // Additional colors for UI elements
        'usa-light-red': '#E63946',
        'usa-light-blue': '#4A6FA5',
        primary: {
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      borderRadius: {
        md: '0.375rem', // rounded-md
      },
      boxShadow: {
        'subtle': '0 2px 8px 0 rgba(44, 62, 80, 0.06)',
      },
    },
  },
  plugins: [],
};
