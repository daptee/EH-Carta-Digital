<template>
    <article class="">
        <h3 class="text-[40px] font-medium text-relaxationBrown mt-[62px]">{{ props.title }}</h3>
        <div class="border-relaxationBrown border-[1px] mb-[62px]" />

        <div class="flex gap-[47px] items-center grow">
            <ImagePopup v-if="principalImage" :image="`${config.public.OUR_EH_CAFETERIA_BASE_URL}${principalImage}`"
                class="w-[95px] max-h-[95px]" />
            <div v-else class="w-[95px] max-h-[95px] border-[4px] rounded-full border-[#656874]">
            <IconsPlaceholder class="w-full h-full border-[4px] rounded-full border-[#848690]" />
        </div>

            <div class="grow flex flex-col gap-[26px]">
                <div v-for="variant in props.variants" :key="variant.VAR1" class="flex flex-col gap-[26px]">
                    <div v-for="variant2 in variant.VARIANTES2" :key="variant2.VAR2" class="flex flex-col">
                        <div class="flex justify-between grow gap-[9px]">

                            <p v-if="!variant2.VARIACION2" class="text-[32px] font-medium text-white">{{
                                getProductTitle(variant, appStore.language) }}</p>

                            <p v-else class="text-[32px] font-medium text-white">{{ `${getProductTitle(variant,
                                appStore.language)} - ${getProductTitle2(variant2, appStore.language)}` }}</p>

                            <div class="border-b-[0.5px] border-white grow mb-[15px]" />
                            <p class="text-[32px] font-medium text-white">
                                ${{ formatPrice(Number(getPrice(variant2, appStore.language))) }}
                            </p>
                        </div>

                        <div v-if="hasDescription(variant2)" class="max-w-[650px]">
                            <p class="text-[22px] font-light text-white">
                                {{ getDescription(variant2, appStore.language) }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="border-relaxationBrown border-[1px] mt-[62px] mb-[44px]" />
    </article>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/appStore';
import type { Variant2 } from '~/types/Products';
import type { VariantProductProps } from '~/types/VariantProduct';
import { getPrice, getDescription, getProductTitle, getProductTitle2 } from '~/utils/getTranslates';


const config = useRuntimeConfig()
const props = defineProps<VariantProductProps>()
const appStore = useAppStore()

const principalImage = computed(() => {
    return props.images.find(img => img.principal_image === 1)?.url
})

const hasDescription = (variant: Variant2) => {
    return variant.DESCRIPCION !== '' || variant.DESCRIPCION_ENG !== '' || variant.DESCRIPCION_POR !== ''
}

</script>