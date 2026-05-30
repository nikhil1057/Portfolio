import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', "sans-serif"],
        body: ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
