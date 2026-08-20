/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#07090C',
        bgSecondary: '#0D1117',
        bgCard: '#11161D',
        voltCyan: '#00E5FF',
        voltBlue: '#00A3FF',
        voltEmerald: '#00E676',
        textPrimary: '#F5F7FA',
        textMuted: '#9AA4B2',
        borderColor: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(0, 229, 255, 0.15)',
        cardGlow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
