module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "width": "width",
        "spacing": 'margin, padding',
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "small": "1024px",
        "medium": "1280px",
        "large": "1440px",
        "xlarge": "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        display: ["Raleway", "sans-serif"],
      },
      colors: {
        transparent: "rgba(249, 244, 241, 0.7)",
        bright: "#F9F4F1",
        dark: "#7E361B",
        focus: "#D7582A",
        accent: "#DA7550",
        gold: "#695042",
        silver: "#9F8A7C",
      },
      backgroundImage: {
        "paw": "url('/paw.png'), linear-gradient(to right bottom, #695042, #9F8A7C)",
      },
    },
  },
  plugins: [],
}
