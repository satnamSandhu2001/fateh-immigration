/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        secondary: '#fff',
        gradient1: 'rgba(29, 47, 65, 1)',
        gradient2: 'rgba(255, 73, 74, 0.5)',
        gradient3: ' rgba(29, 47, 65, 0)',
      },
      fontFamily: {
        sans: ['var(--font-helvetica)'],
        reey: ['var(--font-reey)'],
      },

      boxShadow: {
        'bottom-nav': '0px 2px 10px rgb(0 0 0 / 0.1);',
        'soft-xl': '2px 5px 10px rgb(0 0 0 / 0.10);',
        'soft-sm': '1px 2px 3px rgb(0 0 0 / 0.10);',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '750px',
          },
          '@screen lg': {
            maxWidth: '970px',
          },
          '@screen xl': {
            maxWidth: '1170px',
          },
        },
      });
    },
  ],
};
