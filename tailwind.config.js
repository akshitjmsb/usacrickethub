/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // USA Flag Palette
        'old-glory-red': '#B22234',
        'old-glory-blue': '#3C3B6E',
        'pure-white': '#FFFFFF',
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
