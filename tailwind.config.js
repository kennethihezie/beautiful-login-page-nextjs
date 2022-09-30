/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
      mono: ['Rokkitt', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}
