/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        "light-custom": {
          primary: "#8b5cf6",
          secondary: "#a855f7",
          accent: "#1fb2a6",
          neutral: "#fae8ff",
          "base-100": "#e0e7ff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        "dark-custom": {
          primary: "#7e22ce",
          secondary: "#a855f7",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#1d232a",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
