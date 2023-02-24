/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
        'primary': '#ffbf00',
        'secondary': '#e9dcc9',
        'accent': '#d4e1e9',
        'pteal': '#037492',
        'pblue': '#02364c'
      },
    },
  },
  plugins: [
     require('tw-elements/dist/plugin')
],
}
