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
        'cpd-green': `theme('colors.green.500')`,
        'cpd-green-dark': `theme('colors.green.700')`,
        'cpd-red': `theme('colors.red.500')`,
        'cpd-red-dark': `theme('colors.red.700')`,
        'cpd-pink': `theme('colors.rose.500')`,
        'cpd-pink-dark': `theme('colors.rose.700')`,
      },
      width: {
        '18': '4.5rem', // 18 * 0.25rem = 4.5rem
        '20': '5rem',   // 20 * 0.25rem = 5rem
        '24': '6rem',   // 24 * 0.25rem = 6rem
        '28': '7rem',   // 28 * 0.25rem = 7rem
        '32': '8rem',   // 32 * 0.25rem = 8rem
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      height: {
        '18': '4.5rem', // 18 * 0.25rem = 4.5rem
        '20': '5rem',   // 20 * 0.25rem = 5rem
        '24': '6rem',   // 24 * 0.25rem = 6rem
        '28': '7rem',   // 28 * 0.25rem = 7rem
        '32': '8rem',   // 32 * 0.25rem = 8rem
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      borderWidth: {
        '5': '5px',  // Add border-5 class
        '6': '6px',  // Add border-6 class
      },      
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
        '106': '1.06',
        '107': '1.07',
        '108': '1.08',
        '109': '1.09',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fallDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out forwards',
        'fall-down': 'fallDown 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
