import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Locale = 'es' | 'en' | 'pt'

export const useAppStore = defineStore('app', () => {
  const language = ref<Locale>('es')

  const setLanguage = (newLang: Locale) => {
    language.value = newLang
  }

  return { language, setLanguage }
})
