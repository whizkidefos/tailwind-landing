module.exports = {
  content: [
    "./src/**/*.{html,css,js}",
    "./public/**/*.{html,css,js}",
  ],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#F7F7F7",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    }
  },
  plugins: [],
}
