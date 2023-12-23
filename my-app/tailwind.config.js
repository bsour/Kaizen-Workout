/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to your component files
    "./node_modules/flowbite/**/*.js" // Flowbite components
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#e6fcb3",  // Lightest
          "100": "#defca6",
          "200": "#d0fc94",
          "300": "#c2fc82",
          "400": "#b4fc70",
          "500": "#b0fc04",  // Base color
          "600": "#8ec303",
          "700": "#6c9302",
          "800": "#4a6201",
          "900": "#284201",
          "950": "#142101"   // Darkest
        }
        
      },
      fontFamily: {
        'body': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
