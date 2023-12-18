import { addDynamicIconSelectors } from "@iconify/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      max_22d5: { max: "22.5rem" },
      max_30: { max: "30rem" },
      max_40: { max: "40rem" },
      max_55: { max: "55rem" },
    },
  },
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors(),
  ],
};
export default config;
