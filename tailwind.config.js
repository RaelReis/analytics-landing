/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,jsx,html,css}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
      },
      center: true,
    },
    extend: {
      backgroundImage: {
        hero: "url(src/assets/background-hero.png)",
        "lg-hero-image": "url(src/assets/lg-background-hero.png)",
        footer: "url(src/assets/background-footer.png)",
      },
    },
  },
  plugins: [],
};
