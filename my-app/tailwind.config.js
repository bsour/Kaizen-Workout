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
          "50": "#b0fc04",  // Lightest
          "100": "#b0fc04",
          "200": "#b0fc04",
          "300": "#b0fc04",
          "400": "#b0fc04",
          "500": "#b0fc04",  // Base color
          "600": "#b0fc04",
          "700": "#b0fc04",
          "800": "#b0fc04",
          "900": "#b0fc04",
          "950": "#8dcb02"   // Darkest
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
