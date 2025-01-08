/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: "#FFFFFF", // Add your custom color here
      },
      borderRadius: {
        '10px': '10px',
      },
    },
  },
  plugins: [],
}

