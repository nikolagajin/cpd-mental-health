/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'text-color': 'var(--text-color)',
        'cpd-gray': 'var(--cpd-gray)',    // Add custom gray
        'cpd-orange': 'var(--cpd-orange)',  // Add custom orange
        'cpd-light-gray': 'var(--cpd-light-gray)', // Add custom light gray
        'cpd-blue': 'var(--cpd-blue)',   // Add custom blue
      },
    },
  },
  plugins: [],
}
