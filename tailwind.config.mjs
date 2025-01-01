/** @type {import('tailwindcss').Config} */
export default {
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
        scampi: {
          50: "#f3f5fa",
          100: "#eaecf5",
          200: "#d9ddec",
          300: "#c1c7e0",
          400: "#a7acd2",
          500: "#9193c3",
          600: "#7b79b2",
          700: "#666397",
          800: "#56557e",
          900: "#2b2a3c",
        },
      },
    },
  },
  plugins: [],
};
