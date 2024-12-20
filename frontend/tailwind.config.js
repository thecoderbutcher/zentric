/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0f172a',
        'light': '#f8fafc',
        'primary': '#3b82f6',
        'secondary': '#f59e0b',
      }
    },
  },
  plugins: [],
}