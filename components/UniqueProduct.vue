<template>
    <div class="flex gap-[2em] items-center grow">
        <img :src="`${config.public.OUR_EH_CAFETERIA_BASE_URL}${principalImage}`" alt="Imagen de producto">
        <p>{{ props.product.NOMRE }}</p>
        <p>$4.450</p>
    </div>
</template>

<script setup lang="ts">
import type { UniqueProductProps } from '~/types/UniqueProduct';

const config = useRuntimeConfig()
const props = defineProps<UniqueProductProps>()

const principalImage = computed(() => {
    return props.product.images.find(img => img.principal_image === 1)?.url
})

</script>