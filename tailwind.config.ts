import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customRed: '#9F3D39'
      },
      letterSpacing: {
        'extra-wide': '0.3em',  // 自定義字母間距
        'super-wide': '0.4em',  // 更大的字母間距
      },
      animation: {
        pulsate: 'pulsate 2s infinite',
      },
      keyframes: {
        pulsate: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
