<template>
  <div class="carousel pb-[80px] sticky top-0 ">
    <ul class="carousel-track">
      <li v-for="category in props.categories" :key="category.ID" class="carousel-item flex items-center gap-[9px]" @click="scrollToSection(category.ID)">
        <div class="border-[2px] border-[#656874] rounded-full w-fit ">
          <img v-if="category.img" :src="category.img" class="w-[69px] h-[69px] p-2 border-[2px] rounded-full border-[#848690] bg-white" alt="Icono de categoria">
          <IconsPlaceholder v-else class="w-[69px] h-[69px] p-2 border-[2px] rounded-full border-[#848690] bg-white" />
        </div>
        <span class="text-[20px] font-bold text-white">{{ category.RUBRO }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { HeaderListProps } from '~/types/HeaderList';

const props = defineProps<HeaderListProps>()

const scrollToSection = (id: string | number) => {
  const element = document.getElementById(String(id))
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.carousel {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.carousel-track {
  display: flex;
  gap: 2rem;
}

.carousel-item {
  flex: 0 0 auto;
  scroll-snap-align: start;
  text-align: center;
}
</style>