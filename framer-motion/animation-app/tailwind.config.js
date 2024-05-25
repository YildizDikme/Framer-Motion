export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customStart: "#1A2980",
        customMiddle: "#26D0CE",
      },
    },
  },
  plugins: [require("daisyui")],
};
