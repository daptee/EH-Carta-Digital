<template>
  <section class="flex items-center justify-center header-category py-[60px] gap-[48px]">
    <IconsPlaceholder class="h-[181px] w-[181px]" />
    <h2 class="text-[64px] text-relaxationBrown font-semibold">{{ props.title }}</h2>
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
</style>
