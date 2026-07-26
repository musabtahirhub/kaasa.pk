import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        kaasa: {
          dark: '#0A0B0E',
          card: '#12141A',
          border: '#1E222D',
          borderHover: '#2E3445',
          text: '#F3F4F6',
          textMuted: '#9CA3AF',
          gold: '#D4AF37',
          goldHover: '#F3E5AB',
          goldGlow: 'rgba(212, 175, 55, 0.15)',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #AA7C11 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0B0E 0%, #12141A 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
