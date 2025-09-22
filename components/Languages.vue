<template>
  <div class="relative inline-block w-[200px] z-[9999]">
    <div
      class="flex justify-between items-center bg-transparent border border-white rounded-[10px] px-[29px] py-[18px] text-white font-extralight cursor-pointer"
      @click="open = !open"
    >
      <span>{{ selectedLabel }}</span>
      <IconsDownArrow class="text-gray-400" />
    </div>

    <ul
      v-if="open"
      class="absolute mt-2 w-full bg-[#2b2f3a] border border-white rounded-[10px] z-50"
    >
      <li
        v-for="lang in languagesOptions"
        :key="lang.value"
        @click="selectLanguage(lang)"
        class="px-[29px] py-[18px] cursor-pointer hover:bg-gray-600 text-white font-extralight"
      >
        {{ lang.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAppStore, type Locale } from '~/store/appStore'

const open = ref(false)
const appStore = useAppStore()
const selected = ref(appStore.language)
const { locale } = useI18n()

const languagesOptions: { value: Locale, label: string }[] = [
  { value: 'es', label: 'ESPAÑOL' },
  { value: 'en', label: 'ENGLISH' },
  { value: 'pt', label: 'PORTUGUÊS' }
]

const selectedLabel = computed(() => {
  return languagesOptions.find(lang => lang.value === selected.value)?.label || ''
})

const selectLanguage = (lang: { value: Locale, label: string }) => {
  selected.value = lang.value
  appStore.setLanguage(selected.value, locale)
  open.value = false
}
</script>
