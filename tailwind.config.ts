import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "bg-dark": "#1a1a1a",
      "bg-warm": "#2a1f1a",
      "bg-elevated": "#3d2817",
      "bg-high": "#4a3728",
      "bg-accent": "#5c4a37",
      gold: "#c9843a",
      "gold-light": "#e8a84c",
      "accent-rust": "#b8530d",
      "sage-green": "#6b8e6f",
      "warm-red": "#d64545",
      "warm-gray": "#9b8b7e",
      "red-deep": "#8b1a1a",
      cream: "#f5efe6",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      display: ["var(--font-playfair)", "Georgia", "serif"],
      body: ["var(--font-inter)", "system-ui", "sans-serif"],
    },
    extend: {
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
