/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"] ,
  theme: {
    extend: {
      order: {
        first: '-9999',
        last: '9999',
        normal: '0',
        '1': '1',
        '2': '2',
      }
    },
  },
  plugins: [],
}






