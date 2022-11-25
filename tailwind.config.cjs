/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "darkish-cyan": "#38494a",
      "lightish-cyan": "#6e8e91",
      "dark-grayish-red": "#b24a43",
      "sea-foam-green": "#A5DEC8",
    },
    extend: {},
  },
  plugins: [],
};
