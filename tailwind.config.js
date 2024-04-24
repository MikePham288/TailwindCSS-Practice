/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     dark: '#CC00CC',
      //     DEFAULT: 'rebeccapurple'
      //   }
      // },
      colors(theme) {
        return {
          primary: {
            ...theme.colors.purple,
            dark: '#CC00CC',
            DEFAULT: 'rebeccapurple'
          },
          'electric-violet': {
            '50': '#f5f2ff',
            '100': '#eee7ff',
            '200': '#ded3ff',
            '300': '#c5afff',
            '400': '#aa81ff',
            '500': '#914fff',
            '600': '#852bfc',
            '700': '#7b20e9',
            '800': '#6314c3',
            '900': '#53139f',
            '950': '#32096c',
          },
        }
      }
    },
  },
  plugins: [],
}
