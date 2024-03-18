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
        spoqa: ["SpoqaHanSansNeo", "sans-serif"], // Use the same family name for simplicity
        // spoqaMedium: ["SpoqaHanSansNeoMedium"],
        // spoqaBold: ["SpoqaHanSansNeoBold"],
      },
      fontSize: {
        "2xs": "10px",
        "7.5xl": "5rem",
        "6.5xl": "4.4rem",
      },
      spacing: {
        "2px": "2px",
      },
      maxWidth: {
        "1.5sm": "23rem",
      },
    },
  },
  plugins: [],
};
