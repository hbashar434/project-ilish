/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "my-sans": ["Suisse", "sans"],
        "my-serif": ["Zapf Humanist", "serif"],
      },
      backgroundColor: {
        "my-primary": "#04ce78",
        "my-secondary": "#005B41",
      },
      textColor: {
        "my-primary": "#187776",
        "my-secondary": "#F3FDE8",
      },
      darkMode: "class",
    },
  },

  plugins: [],
};
