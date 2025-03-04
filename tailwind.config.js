/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green : '#06872C',
          red: '#CD2C2C',
          black: '#171515',
          lightgray: '#E8E8E8',
          gray: '#7D7B7B',
          white: '#fff'
        },
      }
    },
  },
  plugins: [],
}

