const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      merriweather: ['Merriweather Sans'],
      murecho: ['Murecho'],
    },
    colors: {
      'darkish-cyan': '#38494a',
      'lightish-cyan': '#6e8e91',
      'dark-grayish-red': '#b24a43',
      'sea-foam-green': '#A5DEC8',
      white: '#ffffff',
      black: '#000000',
      red: 'rgb(255, 67, 67)',
      'actual-red': '#ff0000',
      'actual-green': '#00ff00',
      'faded-grey': '#dde8e4',
      transparent: 'transparent',
    },
    borderWidth: {
      0: '0px',
      4: '4px',
      half: '0.5px',
      50: '50px',
    },
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fastPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 7500ms',
        fastPulse: 'fastPulse 1000ms linear infinite',
      },
      transitionDuration: {
        7500: '7500ms',
        1500: "1500ms"
      },
      backgroundColor: {
        'dark-grayish-red': '#b24a43',
        'sea-foam-green': '#A5DEC8',
      },
      borderColor: {
        'dark-grayish-red': '#b24a43',
        'sea-foam-green': '#A5DEC8',
      },
      boxShadow: {
        'focus-dark-grayish-red': '0 0 0 2px #b24a43',
        'focus-sea-foam-green': '0 0 0 2px #A5DEC8',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
    extend: {
      backgroundColor: ['checked', 'checked-dark'],
      borderColor: ['checked', 'checked-dark'],
      boxShadow: ['focus', 'focus-dark'],
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`checked${separator}${className}`)}:checked`;
        });
      });

      addVariant('checked-dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark .${e(`checked-dark${separator}${className}`)}:checked`;
        });
      });

      addVariant('focus-dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark .${e(`focus-dark${separator}${className}`)}:focus`;
        });
      });
    }),
  ],
};