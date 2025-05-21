module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        customDark: '#27203d',
        customDark2: "#1e1833"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
