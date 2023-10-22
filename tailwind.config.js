/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "my-sans": ["Open Sans", "sans"],
        "my-serif": ["Libre Baskerville", "serif"],
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
