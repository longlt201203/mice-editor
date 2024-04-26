/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        navyBlue: {
          "0": "#003366",
          "1": "#3874AF"
        },
        myNeutral: {
          softGrey: "#F5F5F5",
          charcoalGrey: "#333333",
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        display: "Playfair Display, serif",
        heading: "Roboto Slab, serif",
        body: "Open Sans, sans-serif",
        label: "Lato, sans-serif",
        code: "Fira Code, monospace"
      }
    },
  },
  plugins: [],
}

