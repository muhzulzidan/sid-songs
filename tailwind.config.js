module.exports = {
  content: ['./*.html'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        spotify: '#8AFB80',
        appleMusic: '#FB455D',
        deezer: '#A337FF',
        backgroundDefault: '#070032',
        textColorOne: '#92fb88',
        defaultText: '#ffffff',
        textUndersaturated: '#b6b2c1',
        dangerColor: '#fa233b',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}