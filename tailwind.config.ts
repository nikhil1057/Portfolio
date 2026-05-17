import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        surface: "#12121a",
        border: "#1e1e2e",
        accent: "#64ffda",
        "accent-purple": "#cba6f7",
        "text-primary": "#e4e4e7",
        "text-muted": "#71717a",
      },
      fontFamily: {
        heading: ["JetBrains Mono", "monospace"],
        body: ["Satoshi", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
