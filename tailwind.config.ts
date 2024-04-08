import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1300px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('/assets/images/hero.webp')",
        "mobile-hero-image": "url('/assets/images/mobile-hero.webp')",
        "sejarah-hero-image": "url('/assets/images/bg-pattern.webp')"
        
      },
      colors: {
        "primary-color": "#F2B414",
        "secondary-color": "#0C429F",
        "third-color": "#0C47AD",
        "dark-color": "#041839"
      },
      fontFamily: {
        redhatdisplay: ["Red Hat Display", "sans-serif"]
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3.5rem',
      }
    },
  },
  plugins: [
    
  ],
};
export default config;
