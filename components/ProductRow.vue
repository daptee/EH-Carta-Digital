<template>
  <div class="flex min-w-0 flex-1 flex-col">
    <div class="flex items-baseline justify-between gap-[20px]">
      <p class="text-[32px] font-normal tracking-[0.05em] text-cream">{{ props.label }}</p>
      <p class="font-display text-[44px] font-semibold whitespace-nowrap text-gold">$ {{ formatPrice(props.price, appStore.language) }}</p>
    </div>

    <div v-if="props.description" class="mt-[10px] max-w-[740px]">
      <p class="font-body text-[26px] leading-[1.5] font-light text-[#9c9a90]">{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/appStore';
import { formatPrice } from '~/utils/formatPrices';

const props = defineProps<{
  label: string
  price: string
  description?: string
}>()
const appStore = useAppStore()
</script>
