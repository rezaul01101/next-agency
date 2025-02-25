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
        primary: "#F5F3F4",
        orange: {
          500: "#FF7A01",
          400: "rgba(255, 124, 1, 0.1568627451)",
        },
        black: "#5A5F6A",
      },
      fontFamily: {
        Figtree: "var(--font-family-figtree)",
      },
    },
  },
  plugins: [],
};
