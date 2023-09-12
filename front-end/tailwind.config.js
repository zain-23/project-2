/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-1": "url('/coffee1.jpg')",
        "bg-2": "url('/cardsbeens.jpg')",
        "bg-3": "url('/heartCoffee.jpg')",
        "bg-4": "url('/coffeeMachine.jpg')",
      },
      colors: {
        "backround-Color": "var(--background-color)",
        "button-color/hover-color": "var(--button-color)",
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
