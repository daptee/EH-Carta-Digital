import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Locale = 'es' | 'en' | 'pt'

export const useAppStore = defineStore('app', () => {
  const language = ref<Locale>('es')

  const setLanguage = (lang: Locale) => {
    language.value = lang
  }

  return { language, setLanguage }
})
