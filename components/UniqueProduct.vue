<template>
    <div class="flex gap-[30px] items-center grow">

        <ImagePopup v-if="principalImage" :image="`${config.public.OUR_EH_CAFETERIA_BASE_URL}${principalImage}`"
            class="w-[75px] h-[75px]" />
        <div v-else class="w-[75px] h-[75px] border-[4px] rounded-full border-[#656874]">
            <IconsPlaceholder class="w-full h-full border-[4px] rounded-full border-[#848690]" />
        </div>

        <section class="flex flex-col grow">
            <div class="flex justify-between grow gap-[9px]">
                <p class="text-[26px] font-medium text-white">{{ getProductName(props.product, appStore.language) }}</p>
                <div class="border-b-[0.5px] border-white grow mb-[15px]" />
                <p class="text-[26px] font-medium text-white">${{
                    formatPrice(getPrice(props.product.VARIANTES1[0].VARIANTES2[0], appStore.language), appStore.language) }}</p>
            </div>

            <div v-if="hasDescription(props.product.VARIANTES1[0].VARIANTES2[0])" class="max-w-[650px]">
                <p class="text-[22px] font-light text-white">
                    {{ getDescription(props.product.VARIANTES1[0].VARIANTES2[0], appStore.language) }}
                </p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/appStore';
import type { Variant2 } from '~/types/Products';
import type { UniqueProductProps } from '~/types/UniqueProduct';
import { getProductName, getPrice } from '~/utils/getTranslates';

const config = useRuntimeConfig()
const props = defineProps<UniqueProductProps>()
const appStore = useAppStore()

const principalImage = computed(() => {
    return props.product.images.find(img => img.principal_image === 1)?.url
})

const hasDescription = (variant: Variant2) => {
    return variant.DESCRIPCION !== '' || variant.DESCRIPCION_ENG !== '' || variant.DESCRIPCION_POR !== ''
}

</script>