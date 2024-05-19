
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
        "sejarah-hero-image": "url('/assets/images/bg-pattern.webp')",
        "sejarah-hero-image-web": "url('/assets/images/bg-pattern-web.png')",
        "login-hero-image-mobile": "url('/assets/images/login-image-mobile.png')"
        
      },
      colors: {
        "primary-color": "#F2B414",
        "secondary-color": "#0C429F",
        "third-color": "#0C47AD",
        "dark-color": "#041839",
        "blue-color": "#004C85",
      },
      fontFamily: {
        redhatdisplay: ["Red Hat Display", "sans-serif"]
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3.5rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],

} satisfies Config
export default config;