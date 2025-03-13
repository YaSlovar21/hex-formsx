/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'pc': {'max': '1620px'},
        // => @media (max-width: 1535px) { ... }
  
        'mvpc': {'max': '1441px'},
        // => @media (max-width: 1441px) { ... }
  
        'olpc': {'max': '1240px'},

        'laptop': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
  
        'mobile': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'mobilesm': { 'max': '345px' },
      },
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

