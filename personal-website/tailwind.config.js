module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rose-custom': '#ff6b9d',
        'rose-light': '#ffb6c1',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.3' },
          '25%': { transform: 'translateY(-20px) rotate(90deg)', opacity: '0.6' },
          '50%': { transform: 'translateY(-40px) rotate(180deg)', opacity: '0.4' },
          '75%': { transform: 'translateY(-20px) rotate(270deg)', opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}