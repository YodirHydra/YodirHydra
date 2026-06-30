/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#050816",
        accentCyan: "#00E5FF",
        accentBlue: "#5B8CFF",
        accentPurple: "#7C3AED",
        glassBg: "rgba(255, 255, 255, 0.03)",
        glassBorder: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        neonCyan: "0 0 20px rgba(0, 229, 255, 0.15)",
        neonPurple: "0 0 20px rgba(124, 58, 237, 0.15)",
        glassCard: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        glassInset: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse-slow": "spin-reverse 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.8 },
        },
        "spin-reverse": {
          to: { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
}
