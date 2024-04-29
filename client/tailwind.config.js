/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontFamily: {
      'Bungee': ['Bungee', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] ,// Ensure fonts with spaces have " " surrounding it.
      'rubic' :['"Rubik", sans-serif'],
      'h1' :["Archivo Black" ,"sans-serif"]

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary:"#222529",
      w:'#00000',
      orange:"#FE6E0E",

      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
    extend: {
      
    },
    
  },
  plugins: [ require('flowbite/plugin'),
],
}
}