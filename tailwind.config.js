/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        voltCyan: '#00E5FF',
        voltDark: '#07090C',
        voltCard: '#11161D',
      },
    },
  },
  plugins: [],
};
