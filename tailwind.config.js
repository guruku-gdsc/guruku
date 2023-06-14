/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#15513B",
        yellow: "#FFC42C",
        white1: "#DDD",
        white2: "#EEE",
      },
    },
  },
  plugins: [],
};
