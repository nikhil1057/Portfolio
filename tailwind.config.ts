import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: { DEFAULT: "#080808", elevated: "#111113" },
        "accent-warm": "#e85d2f",
        "accent-cool": "#2dffc2",
      },
      fontFamily: {
        display: ['"Clash Display"', "sans-serif"],
        body: ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
