/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'img-jumbotron': "url('~/assets/images/space-background.png')",
        'hosting-jumbotron': "url('~assets/images/bg-signin.png')"
      },
      width: {
        'promo-jumbotron': '500px'
      },
      height: {
        'hosting-jumbotron': '30vh'
      },
      colors: {
        'footer-pweb': '#16293E'
      }
    }
  },
  plugins: []
}
