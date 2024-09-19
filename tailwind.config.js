/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "main-blue": "#3F61C8",
      "green-text": "#11C784",
      "ligth-blue": "#6188FF",
      "red-text": "#D37279",
      "dark-theme-main-blue": "#0D1421",
      "dark-theme-middle-blue": "#222531",
      "dark-theme-ligth-blue": "#323546",
      "dark-theme-text": "#A1A7B6",
    },
  },
  plugins: [
    require("flowbite/plugin")(
      {
        charts: true,
      },
      require("flowbite/plugin"),
    ),
  ],
};
