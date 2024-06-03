/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        chatOpen: {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        chat: {
          '0': { opacity : 0},
          '100%': {background: '#fff'}
        }
      },
      animation: {
        chatOpen: 'chatOpen 0.3s ease-out forwards',
        chat: 'chat 0.3 ease-out forwards'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
