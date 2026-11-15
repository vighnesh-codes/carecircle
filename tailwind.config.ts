import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F8FAFC",
        surface: {
          DEFAULT: "#FFFFFF",
          hover: "#F1F5F9",
          muted: "#F8FAFC",
        },
        navy: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        status: {
          taken: {
            bg: "#ECFDF5",
            text: "#064E3B",
            icon: "#059669",
            border: "#A7F3D0",
          },
          upcoming: {
            bg: "#FEF3C7",
            text: "#78350F",
            icon: "#D97706",
            border: "#FDE68A",
          },
          missed: {
            bg: "#FEF2F2",
            text: "#7F1D1D",
            icon: "#DC2626",
            border: "#FECACA",
          },
          due: {
            bg: "#FFFBEB",
            text: "#92400E",
            icon: "#F59E0B",
            border: "#FCD34D",
          },
        },
      },
      minHeight: {
        touch: "48px",
        "touch-elderly": "60px",
      },
      minWidth: {
        touch: "48px",
        "touch-elderly": "60px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        card: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        modal: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;

