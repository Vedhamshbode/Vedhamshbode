/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0D0C",
        panel: "#161412",
        bone: "#EDE7DD",
        ash: "#948E84",
        copper: "#BE7C4D",
        "copper-dim": "#8C5A34",
        "copper-soft": "#D9A876",
        moss: "#5F6E5C",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Sora", "sans-serif"],
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
}

