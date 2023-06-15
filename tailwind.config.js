/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green1: "#15513B",
        yellow1: "#FFC42C",
        white1: "#DDD",
        white2: "#EEE",
        black1: "#222",
        grey1: "#666",
      },
      screens: {
        "max-h-md": { raw: "(max-height: 760px)" },
      },
    },
  },
  plugins: [],
};
