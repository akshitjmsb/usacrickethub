/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f20d0d",
        "usa-blue": "#0a3161",
        "navy": "#0a3161", // Alias for backward compatibility during refactor
        "secondary": "#0a3161", // Alias for backward compatibility during refactor
        "background-light": "#f8f5f5", // Standardized to index.html value
        "background-dark": "#221010",
        "neutral-surface": "#f8f9fa",
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}