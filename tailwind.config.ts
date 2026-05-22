import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#24313f",
        mist: "#f6f8fb",
        harbor: "#197b85",
        clay: "#c86b3c",
        citrus: "#f3b23c",
        olive: "#7e9a52"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(36, 49, 63, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
