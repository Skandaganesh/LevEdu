module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackBackground: "#0f0f0f", // YouTube's dark theme background color
        blackNavbar: "#181818", // Navbar color in dark theme
      },
    },
  },
  plugins: [],
};
