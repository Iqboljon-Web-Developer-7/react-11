/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Lato: `"Lato", sans-serif`,
        Quicksand: `"Quicksand", sans-serif;`,
      },
    },
  },
  plugins: [],
  important: true,
};
