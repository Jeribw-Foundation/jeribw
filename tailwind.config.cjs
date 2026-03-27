/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jeribw: {
          primary: "#0A1A2F",
          gold: "#C6A75E",
          light: "#F4F6FA",
          darkText: "#0F172A",
          muted: "#64748B",
          accent: "#1E293B",
        },
      },
    },
  },
  plugins: [],
};