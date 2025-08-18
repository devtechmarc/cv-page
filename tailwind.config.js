import daisyui from "daisyui";
import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        garet: ['Garet', 'Montserrat']
      },
      screens: {
        "xs": "300px"
      },
      colors: {
        'cv-blue' : {
          '50': '#f0faff',
          '100': '#e0f4fe',
          '200': '#baebfd',
          '300': '#7edcfb',
          '400': '#39caf7',
          '500': '#0fb4e8',
          '600': '#0391c6',
          '700': '#0474a0',
          '800-base': '#08678C',
          '900': '#0c516e',
          '950': '#083349',
        },
        'cv-dark-blue' : {
          '50' : '#eaf9ff',
          '100' : '#d0f1ff',
          '200' : '#abe8ff',
          '300' : '#71ddff',
          '400' : '#2ec6ff',
          '500' : '#00a2ff',
          '600' : '#007aff',
          '700' : '#0060ff',
          '800' : '#0050de',
          '900' : '#0049ad',
          '950-base' : '#021c41',
          
        }
      },
    },
  },
  plugins: [
    daisyui,
    tailwindcssAnimate
  ],
  daisyui: {
    themes: ["light"],
  },
}
