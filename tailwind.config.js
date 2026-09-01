/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0a0a0c",
          surface: "#121216",
          card: "#18181f",
          border: "rgba(255, 255, 255, 0.07)",
          borderHover: "rgba(255, 255, 255, 0.18)",
          text: "#fafafa",
          muted: "#a1a1aa",
          subtle: "#71717a",
        },
        accent: {
          cyan: "#00f0ff",
          sky: "#38bdf8",
          amber: "#f59e0b",
          emerald: "#10b981",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'grid-shift': 'gridShift 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        gridShift: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(30px, 30px)' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        }
      }
    },
  },
  plugins: [],
}
