module.exports = {
  purge: [
    './**/*.html',
     './**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xlg': '1440px'
      },
      colors: {
        rose: '#F2DDDE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
