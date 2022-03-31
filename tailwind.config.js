module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ['"Times New Roman"'],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
