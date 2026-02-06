const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
   content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37"
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      transitionDuration: {
        '800': '800ms',
      },
    }
  }

};

export default config;
