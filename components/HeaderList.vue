<template>
  <div
    ref="carouselRef"
    class="carousel sticky top-0 z-10 flex gap-[14px] overflow-x-auto bg-bg px-[48px] pt-[20px] pb-[26px]"
    :class="{ 'is-stuck': isStuck }"
  >
    <button
      v-for="category in props.categories"
      :key="category.ID"
      type="button"
      :data-id="category.ID"
      class="flex-none cursor-pointer rounded-full border px-[40px] py-[20px] font-body text-[19px] tracking-[0.03em] whitespace-nowrap transition-colors"
      :class="[
        props.selectedCategory === String(category.ID)
          ? 'border-transparent bg-gradient-to-b from-[#cba968] to-[#b5924f] font-medium text-[#1a140a]'
          : 'border-white/14 bg-transparent font-light text-[#9c9a90]',
      ]"
      @click="handleClick(category.ID)"
    >
      {{ getCategoryTitle(category, language.language) }}
    </button>
    <div class="w-[34px] flex-none" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useAppStore } from '~/store/appStore'
import type { CategoryWithImage } from '~/types/Categories'
import { getCategoryTitle } from '~/utils/getTranslates'

const props = defineProps<{
  categories: CategoryWithImage[],
  selectedCategory: string | number | null
}>()

const emit = defineEmits<{
  (e: 'update:selectedCategory', value: string | number | null): void
}>()

const language = useAppStore()
const carouselRef = ref<HTMLElement | null>(null)
const isProgrammaticScroll = ref(false)

const scrollActiveIntoView = async (id: string | number | null) => {
  if (!carouselRef.value || id == null) return
  await nextTick()
  const pill = carouselRef.value.querySelector(`[data-id="${id}"]`) as HTMLElement | null
  if (!pill) return

  carouselRef.value.scrollTo({
    left: Math.max(0, pill.offsetLeft),
    behavior: 'smooth'
  })
}

watch(() => props.selectedCategory, (newVal) => {
  if (!isProgrammaticScroll.value) {
    scrollActiveIntoView(newVal)
  }
}, { immediate: true })

// Soft shadow under the nav only once it's pinned to the top.
const isStuck = ref(false)
const updateStuck = () => {
  isStuck.value = !!carouselRef.value && window.scrollY > 0 && carouselRef.value.getBoundingClientRect().top <= 0
}
onMounted(() => {
  window.addEventListener('scroll', updateStuck, { passive: true })
  updateStuck()
})
onBeforeUnmount(() => window.removeEventListener('scroll', updateStuck))

const handleClick = (id: string | number) => {
  isProgrammaticScroll.value = true
  emit('update:selectedCategory', String(id))

  const element = document.getElementById(String(id))
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  scrollActiveIntoView(id)

  setTimeout(() => {
    isProgrammaticScroll.value = false
  }, 600)
}
</script>

<style scoped>
.carousel {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  transition: box-shadow 0.35s ease;
}
.carousel.is-stuck {
  box-shadow: 0 18px 32px -18px rgba(0, 0, 0, 0.9);
}
.carousel::-webkit-scrollbar { display: none; }
</style>
