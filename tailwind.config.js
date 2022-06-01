module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      'custom': ["Source Sans Pro", 'ui-sans-serif', 'system-ui']
    },
      colors: {
        tycoon: "#72A5D9",
        dark: "#1d1d1d",
      },
      backgroundImage: {
        "glass": "linear-gradient(155deg, #A1BEDAb3, #ffffff4d)"
      }
    },
  },
  plugins: [],
};
