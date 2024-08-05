/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeinup: 'fadeinup 2s ease-in-out',
        fadeindown: 'fadeindown 3s ease-in-out',
      },
      keyframes: {
        fadeinup: {
          '0%': {
            transform: 'translateY(40px)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(40px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        fadeindown: {
          '0%': {
            transform: 'translateY(-40px)',
            opacity: '0'
          },
          '80%': {
            transform: 'translateY(-40px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '0.5'
          }
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

