/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",     // Indigo
        secondary: "#facc15",   // Yellow
        dark: "#0f172a",        // Slate
      },
    },
  },
  plugins: [],
};
