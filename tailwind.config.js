/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: 'var(--brand-dark)',
          espresso: 'var(--brand-espresso)',
          brown: 'var(--brand-brown)',
          caramel: 'var(--brand-caramel)',
          cream: 'var(--brand-cream)',
          white: 'var(--brand-white)',
          beige: 'var(--brand-beige)',
          text: 'var(--brand-text)',
          muted: 'var(--brand-muted)',
        },
      },
    },
  },
  plugins: [],
}
