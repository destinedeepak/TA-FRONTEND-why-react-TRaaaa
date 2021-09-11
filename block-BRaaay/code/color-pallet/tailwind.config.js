module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'blue',
      },
      flex: {
        12: '0 1 12%',
        17: '0 1 17%',
        85: '0 1 85%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
