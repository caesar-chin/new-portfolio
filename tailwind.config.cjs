/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      merriweather: ["Merriweather Sans"],
      murecho: ["Murecho"],
    },
    colors: {
      "darkish-cyan": "#38494a",
      "lightish-cyan": "#6e8e91",
      "dark-grayish-red": "#b24a43",
      "sea-foam-green": "#A5DEC8",
      white: "#ffffff",
      black: "#000000",
      red: "rgb(255, 67, 67)",
      "actual-red": "#ff0000",
      "actual-green": "#00ff00",
      "faded-grey": "#dde8e4",
      transparent: "transparent",
    },
    borderWidth: {
      0: "0px",
      4: "4px",
      half: "0.5px",
      50: "50px",
    },
    extend: {},
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [],
};
