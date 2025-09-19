<template>
    <div class="flex gap-[47px] items-center grow">
        <div class="border-[2px] border-[#656874] rounded-full w-[95px] h-[95px]">
            <img v-if="principalImage" :src="`${config.public.OUR_EH_CAFETERIA_BASE_URL}${principalImage}`"
                class="w-full h-full border-[2px] rounded-full border-[#848690]"
                alt="Icono de categoria">
            <IconsPlaceholder v-else
                class="w-full h-full p-2 border-[2px] rounded-full border-[#848690] " />
        </div>
        <div class="flex justify-between grow gap-[9px]">
            <p class="text-[32px] font-medium text-white">{{ props.product.NOMRE }}</p>
            <div class="border-b-[0.5px] border-white grow mb-[15px]" />
            <p class="text-[32px] font-medium text-white">$4.450</p>
        </div>
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