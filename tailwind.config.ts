import type { Config } from 'tailwindcss'

// Same palette/fonts as EH-app-suites-2.0 (`app/assets/css/main.css` @theme), so the menu
// matches the EH Café screen there.
const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#06080b',
        'bg-soft': '#0d1219',
        surface: '#0b0e13',
        gold: '#c6a667',
        'gold-soft': '#d9c08a',
        'gold-deep': '#b5924f',
        cream: '#ece6da',
        muted: '#9a9890',
        'muted-2': '#8f8d84',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
      // Tailwind v3 only accepts opacity modifiers (`border-white/14`) from this scale.
      opacity: {
        6: '0.06',
        7: '0.07',
        8: '0.08',
        14: '0.14',
        16: '0.16',
        22: '0.22',
        26: '0.26',
        32: '0.32',
      },
    },
  },
}

export default config
