import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom colors to use across your project
      colors: {
        primary: "#4F6D7A",       // A rich dark blue
        secondary: "#2A2939",     // A lighter blue
        accent: "#397d96",        // A fresh green accent
        background: "#DBE9EE",    // A light gray/white background
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
