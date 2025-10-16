<template>
  <section class="flex items-center justify-center header-category py-[60px] gap-[48px] px-10">
    <div class="border-[8px] border-[#656874] rounded-full max-h-[181px] w-[181px]">
      <img
        v-if="props.img"
        :src="props.img"
        class="w-fit h-fit p-2 border-[8px] rounded-full border-[#848690] bg-white"
        alt="Icono de categoria"
      />
      <IconsPlaceholder v-else class="w-full h-full border-[8px] rounded-full border-[#848690]" />
    </div>

    <h2 class="text-relaxationBrown font-semibold text-center leading-tight header-title">
      {{ props.title }}
    </h2>
  </section>
</template>

<script setup lang="ts">
import type { HomeCategoryProps } from '~/types/HomeCategory';
const props = defineProps<HomeCategoryProps>()
</script>

<style scoped>
.header-category {
  background-image: url('/images/header-category.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.header-title {
  max-width: 70%;
  font-size: clamp(32px, 4vw, 64px);
  box-sizing: border-box;
}
</style>
