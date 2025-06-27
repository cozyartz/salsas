/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'cursive'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'salsa-red': '#DC2626',
        'salsa-orange': '#EA580C',
        'salsa-yellow': '#FBBF24',
        'salsa-green': '#16A34A',
        'dark-100': '#1F2937',
        'dark-200': '#111827',
        'dark-300': '#0F172A',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(251, 191, 36, 0.3)',
        'glow-red': '0 0 20px rgba(220, 38, 38, 0.3)',
      },
    },
  },
  plugins: [],
}