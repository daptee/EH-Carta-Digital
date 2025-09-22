<template>
  <div ref="carouselRef" class="carousel py-[27px] sticky top-0 z-50 bg-mainBlue">
    <ul class="carousel-track">
      <li
        v-for="category in props.categories"
        :key="category.ID"
        ref="categoryItems"
        class="carousel-item flex items-center gap-[9px] cursor-pointer"
        @click="handleClick(category.ID, $event)"
      >
        <div class="border-[2px] border-[#656874] rounded-full w-fit">
          <img
            v-if="category.img"
            :src="category.img"
            class="w-[69px] h-[69px] p-2 border-[2px] rounded-full border-[#848690]"
            :class="[selectedCategory === category.ID ? 'bg-white' : 'bg-lightGray']"
            alt="Icono de categoria"
          />
          <IconsPlaceholder
            v-else
            class="w-[69px] h-[69px] p-2 border-[2px] rounded-full border-[#848690]"
            :class="[selectedCategory === category.ID ? 'bg-white' : 'bg-lightGray']"
          />
        </div>
        <span
          class="text-[20px] font-bold text-secondaryBrown"
          :class="{ 'text-white': selectedCategory === category.ID }"
        >
          {{ getCategoryTitle(category, language.language) }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/appStore';
import type { HeaderListProps } from '~/types/HeaderList'
import { getCategoryTitle } from '~/utils/getTranslates';

const props = defineProps<HeaderListProps>()
const selectedCategory = ref<string | number | null>('8')
const language = useAppStore()

const carouselRef = ref<HTMLElement | null>(null)

const handleClick = (id: string | number, event: MouseEvent) => {
  selectedCategory.value = id

  const element = document.getElementById(String(id))
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const target = event.currentTarget as HTMLElement
  if (carouselRef.value && target) {
    const offsetLeft = target.offsetLeft
    carouselRef.value.scrollTo({
      left: offsetLeft,
      behavior: 'smooth',
    })
  }
}
</script>


<style scoped>
.carousel {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel-track {
  display: flex;
  gap: 54px;
}

.carousel-track li:first-child {
  padding-left: 104px;
}

.carousel-track li:last-child {
  padding-right: 104px;
}

.carousel-item {
  flex: 0 0 auto;
  scroll-snap-align: start;
  text-align: center;
}
</style>