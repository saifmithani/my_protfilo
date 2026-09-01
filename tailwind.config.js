/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#FAFAFA",
          surface: "#FFFFFF",
          card: "#F5F5F5",
          subtle: "#F0F0F0",
          border: "#E5E5E5",
          borderHover: "#111111",
          text: "#111111",
          secondary: "#555555",
          muted: "#888888",
        },
        accent: {
          blue: "#2563EB",
          sky: "#0284C7",
          amber: "#D97706",
          emerald: "#059669",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 12px 30px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
