/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef5ee',
          100: '#fde8d7',
          200: '#fbcdae',
          300: '#f8ab7a',
          400: '#f47d44',
          500: '#f15a20',
          600: '#e24016',
          700: '#bb2f14',
          800: '#952718',
          900: '#792316',
          950: '#410f09',
        },
        accent: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d0dbe7',
          300: '#a7bdd3',
          400: '#779abb',
          500: '#577ea4',
          600: '#43648a',
          700: '#375170',
          800: '#30455e',
          900: '#2c3b4f',
          950: '#1d2735',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px 0 rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
