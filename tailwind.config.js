/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "my-sans": ["Suisse", "sans"],
        "my-serif": ["Zapf Humanist", "serif"],
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
