import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const language = ref('es')

  const setLanguage = (refValue: any) => {
    language.value = refValue
  }

  return { language, setLanguage }
})
