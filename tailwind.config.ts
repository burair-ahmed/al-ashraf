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
        // Primary charcoal scale
        charcoal: {
          DEFAULT: "#0F1115",
          50: "#E8E9EA",
          100: "#C4C6CA",
          200: "#9DA0A7",
          300: "#757984",
          400: "#555A63",
          500: "#373C45",
          600: "#272C34",
          700: "#1A1E25",
          800: "#0F1115",
          900: "#070809",
        },
        // Warm gold accent
        gold: {
          DEFAULT: "#C9A356",
          light: "#E0C07E",
          muted: "#A6864A",
          dark: "#7A6235",
          50: "#FBF5E6",
          100: "#F5E8C4",
          200: "#EACF8A",
          300: "#DDB95F",
          400: "#C9A356",
          500: "#A6864A",
          600: "#7A6235",
          700: "#503F20",
        },
        // Secondary teal (Dairy/Services accent)
        teal: {
          DEFAULT: "#1D7A6B",
          light: "#2BA898",
          muted: "#155C50",
          dark: "#0D3B34",
          50: "#E3F4F2",
          100: "#B8E3DE",
          200: "#6FC5BB",
          300: "#2BA898",
          400: "#1D7A6B",
          500: "#155C50",
          600: "#0D3B34",
        },
        // Warm grays
        warm: {
          50: "#FAFAF8",
          100: "#F2F1EE",
          200: "#E4E2DC",
          300: "#D1CECA",
          400: "#ABA8A2",
          500: "#847F79",
          600: "#5E5A55",
          700: "#403D39",
          800: "#252220",
          900: "#141210",
        },
        "off-white": "#FAFAF8",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid display type scale using clamp
        "display-2xl": [
          "clamp(3.5rem, 8vw, 7rem)",
          { lineHeight: "1.0", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-xl": [
          "clamp(2.75rem, 6vw, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2rem, 4vw, 3.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.5rem, 3vw, 2.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        "body-lg": [
          "clamp(1rem, 1.25vw, 1.125rem)",
          { lineHeight: "1.7" },
        ],
        body: ["1rem", { lineHeight: "1.65" }],
        eyebrow: [
          "0.75rem",
          { lineHeight: "1", letterSpacing: "0.15em", fontWeight: "600" },
        ],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "section": "6rem",
        "section-lg": "9rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-overlay":
          "linear-gradient(to right, rgba(15,17,21,0.92) 0%, rgba(15,17,21,0.6) 60%, rgba(15,17,21,0.3) 100%)",
        "card-overlay":
          "linear-gradient(to top, rgba(15,17,21,0.9) 0%, rgba(15,17,21,0.3) 60%, transparent 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, transparent 0%, rgba(201,163,86,0.3) 50%, transparent 100%)",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(15,17,21,0.08)",
        "card-hover": "0 16px 48px rgba(15,17,21,0.16)",
        "gold": "0 0 32px rgba(201,163,86,0.25)",
        "gold-sm": "0 0 12px rgba(201,163,86,0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "spring": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [],
};

export default config;
