import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "3xl": "1140px",
        },
      },
      extends: {
        borderRadius: {
          lg: "1rem",
          md: "0.75rem",
          sm: "0.5rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
