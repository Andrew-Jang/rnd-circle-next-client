module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray757575: "#757575",
        rndBlue: "#000AFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      fontSize: {
        "2xs": "10px",
      },
    },
  },
  plugins: [],
};
