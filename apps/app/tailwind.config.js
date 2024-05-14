/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        success: "var(--success-color)",
        warning: "var(--warning-color)",
        error: "var(--error-color)",
        info: "var(--info-color)",
        background: "var(--background-color)",
        surface: "var(--surface-color)",
        text: "var(--text-color)",
        "text-secondary": "var(--text-color)",
        "text-tertiary": "var(--text-color)",
        on: "var(--on-color)",
      },
    },
    fontFamily: {
      sans: ["Geist", 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    }
  },
  plugins: [],
};
