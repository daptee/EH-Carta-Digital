import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Locale = 'es' | 'en' | 'pt'

export const useAppStore = defineStore('app', () => {
  const language = ref<Locale>('es')

  const setLanguage = (lang: Locale, i18nLocale?: Ref<Locale>) => {
    language.value = lang
    if (i18nLocale) i18nLocale.value = lang
  }

  return { language, setLanguage }
})
