import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#080b0e",
        "surface-alt": "#0d1117",
        "accent-warm": "#e8a838",
        "accent-cool": "#38bdf8",
      },
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        body: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
