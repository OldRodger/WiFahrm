
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "regular": ["poppins"]
      },
      colors: {
        "gray-20": "rgba(98, 180, 102, .1)",
        "gray-50": "#EFE6E6",
        "primary-300": "#62b466",
        "primary-500": "#469647",
      },
      backgroundImage:theme => ({
        'hero-background': "url('./assets/svg/home-page-graphic.svg')",
        'benefits-background': "url('./assets/svg/benefits-wave.svg')",
        "footer-wave":"url('./assets/svg/footer-wave.svg')",
        "invest-background-1": "linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(44, 62, 80, .85) 70%), url('https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg')",
        "invest-background-2": "linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(44, 62, 80, .85) 70%), url('https://images.pexels.com/photos/11588042/pexels-photo-11588042.jpeg')",
      }),
      content: {
        dots: "url('./assets/img/dots.png')",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    }
  },
  plugins: [],
}
