<template>
  <div v-reveal:zoom class="relative flex h-[522px] items-end overflow-hidden">
    <img
      v-if="!isBroken(props.img)"
      :src="props.img!"
      class="absolute inset-0 h-full w-full object-cover"
      alt=""
      @error="markFailed(props.img)"
    />
    <div v-else class="absolute inset-0 bg-gradient-to-br from-bg-soft to-surface" />
    <div class="absolute inset-0 bg-gradient-to-b from-[rgba(6,9,13,.3)] to-[rgba(6,9,13,.92)]" />
    <div class="hero-text relative px-[48px] pb-[46px]">
      <div class="font-body text-[22px] font-light tracking-[0.3em] text-gold">{{ t('menu.title').toUpperCase() }}</div>
      <h2 class="mt-[14px] font-display text-[106px] leading-none font-medium text-cream">{{ props.title }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HomeCategoryProps } from '~/types/HomeCategory';

const props = defineProps<HomeCategoryProps>()
const { t } = useTranslate()
const { markFailed, isBroken } = useImageFallback()
</script>
