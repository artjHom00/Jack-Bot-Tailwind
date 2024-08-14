/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'figmawhite': '#FFF5EA',
        'figmabeige': '#F0CBA2',
        'figmabeige2': '#AAA49D',
        'figmabeigelight': '#F9E4CD',
        'figmabeigelight2': '#F3E6D8',
        'figmayellow': '#F1AC1D',
        'figmablack': '#1E110D',
        'figmabrown': '#52433F',
        'figmalightbrown': '#7D5546',
        'figmared': '#C33F34',
      },
      maxWidth: {
        'screen-3xl': '1600px', // Adjust the values as needed
        'screen-4xl': '1920px',
        'screen-5xl': '2240px',
      },
      height: {
        '50vh': '50vh'
      }
    },
  },
  plugins: [],
}
