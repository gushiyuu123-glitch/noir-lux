// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        gold: "#d4af37",
        muted: "#bcbcbc",
      },
      fontFamily: {
        base: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        rhythm: "24px",
      },
    },
  },
  plugins: [],
}
