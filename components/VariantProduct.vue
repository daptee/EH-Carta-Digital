<template>
    <article class="">
        <h3 class="text-[40px] font-medium text-relaxationBrown mt-[62px]">{{ props.title }}</h3>
        <div class="border-relaxationBrown border-[1px] mb-[62px]" />

        <div class="flex gap-[47px] items-center grow">
            <div class="border-[2px] border-[#656874] rounded-full w-[95px] h-[95px]">
                <img v-if="principalImage" :src="`${config.public.OUR_EH_CAFETERIA_BASE_URL}${principalImage}`"
                    class="w-full h-full border-[2px] rounded-full border-[#848690]" alt="Icono de categoria">
                <IconsPlaceholder v-else class="w-full h-full p-2 border-[2px] rounded-full border-[#848690] " />
            </div>

            <div class="grow flex flex-col gap-[26px]">
                <div v-for="variant in props.variants" class="flex justify-between grow gap-[9px]">
                    <p class="text-[32px] font-medium text-white">{{ variant.VARIACION1 }}</p>
                    <div class="border-b-[0.5px] border-white grow mb-[15px]" />
                    <p class="text-[32px] font-medium text-white">$4.450</p>
                </div>
            </div>
        </div>

        <div class="border-relaxationBrown border-[1px] mt-[62px] mb-[44px]" />
    </article>
</template>

<script setup lang="ts">
import type { VariantProductProps } from '~/types/VariantProduct';


const config = useRuntimeConfig()
const props = defineProps<VariantProductProps>()

const principalImage = computed(() => {
    return props.images.find(img => img.principal_image === 1)?.url
})

</script>