/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  extend: {
    fontFamily: {
      primary: ['"Your First Font"', 'sans-serif'],
      secondary: ['"Your Second Font"', 'serif'],
      accent: ['"Your Third Font"', 'monospace']
    },
  },
},
  plugins: [],
};
