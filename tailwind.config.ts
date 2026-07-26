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
        hh: {
          ink: '#0E1116',
          bone: '#F5F1E8',
          amber: '#FF8A3D',
          steel: '#8B93A0',
        },
        kaasa: {
          dark: '#0E1116',
          card: '#161A22',
          border: '#232936',
          borderHover: '#323B4D',
          text: '#F5F1E8',
          textMuted: '#8B93A0',
          gold: '#FF8A3D',
          goldHover: '#FFAA70',
          goldGlow: 'rgba(255, 138, 61, 0.15)',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        script: ['var(--font-alex-brush)', 'cursive'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #FF8A3D 0%, #FFAA70 50%, #E66A1F 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0E1116 0%, #161A22 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
