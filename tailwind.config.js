/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        VeryDarkGrayishBlue: "var(--VeryDarkGrayishBlue)",
        DesaturatedDarkBlue: "var(--DesaturatedDarkBlue)",
        GrayishBlue: "var(--GrayishBlue)",
        LightGrayishBlue: "var(--LightGrayishBlue)",
      },
    },
  },
  plugins: [],
};
