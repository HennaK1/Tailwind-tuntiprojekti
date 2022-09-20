/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/img/*.{jpg,svg}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "bg-image": "url('./img/circle2.svg')",
        "bg-image2": "url('./img/concert.jpg')",
      },
      colors: {
        darkbrown: "#3A2F33",
        lightbrown: "#9D8483",
        lightblue: "#ACCFD2",
        lightyellow: "#DED8AB",
        naturalwhite: "#EDEFEF",
      },
    },
  },
  plugins: [],
};
