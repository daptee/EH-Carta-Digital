<template>
  <div class="flex items-center gap-[4px] rounded-full border border-white/14 bg-[rgba(6,8,11,.4)] p-[4px]">
    <button
      v-for="lang in languagesOptions"
      :key="lang.value"
      type="button"
      class="rounded-full px-[22px] py-[10px] font-body text-[16px] tracking-[0.14em] transition-colors"
      :class="[
        appStore.language === lang.value
          ? 'bg-gradient-to-b from-[#cba968] to-[#b5924f] font-medium text-[#1a140a]'
          : 'font-light text-[#9c9a90]',
      ]"
      @click="appStore.setLanguage(lang.value)"
    >
      {{ lang.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useAppStore, type Locale } from '~/store/appStore'

const appStore = useAppStore()

const languagesOptions: { value: Locale, label: string }[] = [
  { value: 'es', label: 'ES' },
  { value: 'en', label: 'EN' }
  // { value: 'pt', label: 'PT' }
]
</script>
