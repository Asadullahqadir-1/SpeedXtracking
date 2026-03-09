import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          500: "#1266e3",
          600: "#0d56c3",
          700: "#0a469f"
        }
      }
    }
  },
  plugins: []
};

export default config;
