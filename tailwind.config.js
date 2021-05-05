module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        'sun': '#DE8611'
      },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
