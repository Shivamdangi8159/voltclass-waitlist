/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        voltCyan: '#2563EB',
        voltDark: '#FFFFFF',
        voltCard: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
