import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "color": {
          "success": {
            100: "#34d399",
            200: "#10b77f",
          },
          "danger": {
            100: "#e7000b",
            200: "#dc2828",
          },
        }
      },
      fontFamily: {
        iransans: ["IRANSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
