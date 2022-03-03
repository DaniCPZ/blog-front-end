module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#e53e3e',
      },
      height: {
        '400px': '400px',
        "600px": "600px",
      }
    },
  },
  plugins: [],
}
