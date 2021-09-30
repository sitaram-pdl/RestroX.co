const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#16181A",
        background: "#202326",
        listhover: "#3D3D3D",
        onHover: "#444444",
        trendingUpIcon: "#7367F0",
        trendingUpBg: "#212134",
        h1: "#8F8F8F",
        inStock: "#128913",
        inStockBorder: "#164617",
        outOfStock: "#7D3739",
        outOfStockBorder: "#552D2F",
        doNotOrder: "#E90002",
        doNotOrderBorder: "#FF0000",
        scheduled: "#E5DDB2",
        scheduledBorder: "#FBF0C2",
        listorgrid: "#EA7C69",
        editTable: "#700000",
        chair: "#403F3F",
        tableOccupied: "#168913",
        tableOpen: "#7367F0",
        tableReserved: "#FBF0C2",
        tableOutOfService: "#FF0000",
        occupiedChair: "#467FFF",
        modalText: "#B9BABA",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
