/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBg: "#232531",
        customFormBg: "#333645",
        customEmphasisColor: "#787F99",
        customFontColor: "#888EA1",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"]
    },
  },
  plugins: [],
};
