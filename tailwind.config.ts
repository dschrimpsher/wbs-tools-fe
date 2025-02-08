import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/students/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom colors to use across your project
      colors: {
        primary: "#4F6D7A",       // A rich dark blue
        secondary: "#4f4d6c",     // A lighter blue
        accent: "#49a2c3",        // A fresh green accent
        background: "#DBE9EE",    // A light gray/white background
        base: "#d1cfe3",
        dark: "#2b2a3a",
      },
      // Custom font family (make sure you've imported the font in your project)
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    // Optional plugins to style forms and typography
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config);
