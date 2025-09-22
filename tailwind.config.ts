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
        lightGray: '#c5c6cb',
        mainBlue: '#3E4251',
        secondaryBrown: '#926948',
        blueGray: '',
        intermediateGray: '',
        decorativeGreen: '',
        relaxationBrown: '#e2bd96',
        scentedGreen: '',
      },
    },
  }
}

export default config
