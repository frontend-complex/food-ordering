/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        orange: "#FC8A06",
        green: "#028643",
        silver: "#FAFAFA",
        silver2: "#fbfbfb",
        silver3: "#F5F5F5",
        gray: "#e8e8e8",
      },
    },
  },
  plugins: [],
};
