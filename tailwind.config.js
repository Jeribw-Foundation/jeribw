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
          primary: '#0A1A2F',      // Deep institutional navy
          gold: '#C6A75E',         // Muted editorial gold (signature accent)
          light: '#F4F6FA',        // Soft newsroom background
          darkText: '#0F172A',     // Primary body text
          muted: '#64748B',        // Secondary text
          accent: '#1E293B',       // Structured slate section
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'], // Editorial headings
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],   // Modern body
      },
      maxWidth: {
        '8xl': '1440px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
