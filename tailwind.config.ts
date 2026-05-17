import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#12121a",
        border: "#1e1e2e",
        accent: "#64ffda",
        "accent-secondary": "#cba6f7",
        "text-primary": "#e4e4e7",
        "text-muted": "#71717a",
      },
      fontFamily: {
        heading: ["JetBrains Mono", "monospace"],
        body: ["Inter", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
      maxWidth: {
        content: "64rem",
      },
    },
  },
  plugins: [],
};

export default config;
