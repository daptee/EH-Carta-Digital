<template>
  <div ref="carouselRef" class="carousel py-[27px] sticky top-0 z-50 bg-mainBlue">
    <ul class="carousel-track">
      <li
        v-for="category in props.categories"
        :key="category.ID"
        :data-id="category.ID"
        class="carousel-item flex items-center gap-[9px] cursor-pointer"
        @click="handleClick(category.ID, $event)"
      >
        <div class="border-[2px] border-[#656874] rounded-full w-fit">
          <img
            v-if="category.img"
            :src="category.img"
            class="w-[69px] h-[69px] p-2 border-[2px] rounded-full border-[#848690]"
            :class="[props.selectedCategory === String(category.ID) ? 'bg-white' : 'bg-lightGray']"
            alt="Icono de categoria"
          />
          <IconsPlaceholder
            v-else
            class="w-[69px] h-[69px] p-2 border-[2px] rounded-full border-[#848690]"
            :class="[props.selectedCategory === String(category.ID) ? 'bg-white' : 'bg-lightGray']"
          />
        </div>
        <span
          class="text-[20px] font-bold text-secondaryBrown"
          :class="{ 'text-white': props.selectedCategory === String(category.ID) }"
        >
          {{ getCategoryTitle(category, language.language) }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
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
  const li = carouselRef.value.querySelector(`li[data-id="${id}"]`) as HTMLElement | null
  if (!li) return

  const container = carouselRef.value
  const offsetLeft = li.offsetLeft
  container.scrollTo({
    left: Math.max(0, offsetLeft),
    behavior: 'smooth'
  })
}

watch(() => props.selectedCategory, (newVal) => {
  if (!isProgrammaticScroll.value) {
    scrollActiveIntoView(newVal)
  }
}, { immediate: true })

const handleClick = (id: string | number, event: MouseEvent) => {
  isProgrammaticScroll.value = true
  emit('update:selectedCategory', id)

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
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar { display: none; }
.carousel-track { display:flex; gap:54px; }
.carousel-track li:first-child { padding-left:104px; }
.carousel-track li:last-child { padding-right:104px; }
.carousel-item { flex:0 0 auto; scroll-snap-align:start; text-align:center; }
</style>
