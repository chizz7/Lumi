import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
        figtree:  ['var(--font-figtree)', 'system-ui', 'sans-serif'],
      },
      colors: {
        night:  { 1:'#16123a', 2:'#241a52', 3:'#3a2470', 4:'#4d2e85' },
        cream:  { DEFAULT:'#FBF4E6', 2:'#F4E9D4' },
        amber:  { DEFAULT:'#F4A93C', 2:'#E0852A' },
        gold:   '#FFD27A',
        peach:  '#F8CBA0',
        rose:   '#EB8A8A',
        teal:   '#54B6A6',
        violet: '#9B86E0',
        ink:    { DEFAULT:'#211a3a', 2:'#5d5278' },
      },
    },
  },
  plugins: [],
}
export default config
