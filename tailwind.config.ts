import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Modern, elegant blue palette for UsefulCoin
        useful: {
          background: "#F8FAFC", // Very light off-white/blue-gray for background
          accent: "#2563EB", // A strong, clean blue (blue-600)
          card: "#FFFFFF", // Pure white for cards
          "card-border": "#E0F2F7", // Very light blue for subtle card borders (blue-100)
          text: "#1F2937", // Dark gray for main text (gray-800)
          "light-text": "#4B5563", // Lighter gray for secondary text (gray-600)
          "footer-bg": "#1F2937", // Dark gray for footer background
          "footer-text": "#D1D5DB", // Light gray for footer text
          "footer-link": "#9CA3AF", // Slightly darker gray for footer links
          "blue-light": "#EBF5FF", // A very light blue for subtle backgrounds/accents
          "blue-dark": "#1A4D9F", // A darker shade of blue for deeper accents
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        // Custom keyframe for fade-in-up animation
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards", // Apply forwards to keep the end state
      },
      boxShadow: {
        "custom-light": "0 4px 12px rgba(0, 0, 0, 0.05)", // Softer shadow for cards
        "custom-medium": "0 8px 20px rgba(0, 0, 0, 0.08)", // Slightly stronger for hover
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
