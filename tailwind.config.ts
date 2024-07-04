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
      colors: {
        'custom-navy': '#00293f',
        'custom-grey': '#F1F1F1',
        // add other custom colors here
      },
      fontFamily: {
        sans: ['Lulo Clean One Bold', 'Helvetica', 'Arial', 'sans-serif'],
        // Replace 'Inter' with the name of your custom font
      },
    },
  },
  plugins: [],
};
export default config;
