import type { Config } from 'tailwindcss'

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
        lightGray: '',
        mainBlue: '#3E4251',
        secondaryBrown: '',
        blueGray: '',
        intermediateGray: '',
        decorativeGreen: '',
        relaxationBrown: '',
        scentedGreen: '',
      },
    },
  }
}

export default config
