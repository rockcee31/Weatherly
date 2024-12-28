module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths if needed
  theme: {
    extend: {
      screens: {
        'custom': { 'max': '1200px' }, // Custom screen for less than 1000px
        'mid': { 'max': '1050px' }, // Custom screen for less than 1000px
        'small': { 'max': '919px' }, // Custom screen for less than 1000px
        'xsm': { 'max': '820px' }, // Custom screen for less than 1000px
        'hs': { 'max': '520px' }, // Custom screen for less than 1000px
      },
      backgroundImage: {
        'app-bg': "url('/bg.png')",
        // 'side-bg':"url('/bg2.png')"
      },
      fontFamily:{
        popins:["Poppins", "serif"],
        roboto:["Roboto", "serif"],
        economy:["Bungee Spice", "sans-serif"],
        nato:["Noto Sans", "sans-serif"],
        exo:["Exo 2", "sans-serif"]
      }
    },
  },
  plugins: [],
};
