/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sixtyfour: ['sixtyfour', 'sans-serif'],
        sticknobills: ['sticknobills', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
