const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  darkMode: 'class', // Use 'media' if you prefer media-query based dark mode
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#ff3d00', // Custom primary color
        secondary: '#ffc400', // Custom secondary color
        // Add additional colors as needed
      },
      borderRadius: {
        lg: '1rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif', ...fontFamily.sans],
      },
      // You can add more properties to extend such as shadows, spacing, etc.
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Make sure this plugin is installed
    // Add other plugins here as needed, e.g., forms, typography, etc.
  ],
};


