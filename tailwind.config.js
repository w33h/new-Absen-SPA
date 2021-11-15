module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        lg: '26.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
