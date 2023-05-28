/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        progress: "animate-progress 2s",
        "progress-hover": "animate-progress-hover 5s infinite",
      },
      keyframes: {
        "animate-progress": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "animate-progress-hover": {
          "0%": { width: "0" },
          "25%": { width: "25%" },
          "50%": { width: "50%" },
          "75%": { width: "75%" },
          "100%": { width: "100%" },
        },
        animationTimingFunction: {
          "progress-hover": "cubic-bezier(0.4, 0, 0.2, 1)",
        },
        animationDuration: {
          "progress-hover": "10s",
        },
      },
    },
  },

  plugins: [require("daisyui")],
};
