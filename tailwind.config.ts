import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.config.tsx",
  ],
} satisfies Config;
