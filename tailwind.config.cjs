/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "jeribw-primary": "#0A1A2F",
        "jeribw-gold": "#C6A75E",
        "jeribw-light": "#F4F6FA",
        "jeribw-darkText": "#0F172A",
        "jeribw-muted": "#64748B",
        "jeribw-accent": "#1E293B",
      },

      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },

      maxWidth: {
        "8xl": "1440px",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
      },
    },
  },

  plugins: [],
};