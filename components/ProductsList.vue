<template>
    <section class="flex flex-col px-[48px] pt-[60px] pb-[80px]">
        <template v-for="(product, index) in props.products" :key="product.ID">
            <div v-if="combosOf(product).length === 1" v-reveal class="flex items-baseline gap-[28px] border-b border-white/6 py-[24px]">
                <div
                    class="photo-zoom h-[122px] w-[122px] flex-none self-center overflow-hidden rounded-[20px] bg-[#161d27]"
                    :class="{ 'cursor-pointer': !isBroken(imageOf(product)) }"
                    @click="openLightbox(imageOf(product))"
                >
                    <img v-if="!isBroken(imageOf(product))" :src="imageOf(product)!" class="h-full w-full object-cover" alt="" @error="markFailed(imageOf(product))" />
                    <img v-else src="/svg/placeholder-eh.svg" class="h-full w-full object-contain" alt="" />
                </div>
                <ProductRow
                    :label="getProductName(product, appStore.language)"
                    :price="combosOf(product)[0]!.variant2.PRECIO"
                    :description="getDescription(combosOf(product)[0]!.variant2, appStore.language)"
                />
            </div>

            <div
                v-else-if="combosOf(product).length > 1"
                class="mb-[56px]"
                :class="index > 0 && combosOf(props.products[index - 1]!).length === 1 ? 'mt-[40px]' : ''"
            >
                <div v-reveal class="mb-[26px] flex items-center gap-[22px]">
                    <span class="ms text-[38px] text-gold">restaurant_menu</span>
                    <span class="font-body text-[24px] font-normal tracking-[0.26em] text-gold">{{ getProductName(product, appStore.language) }}</span>
                    <span class="h-px flex-1 bg-gold/26" />
                </div>
                <div
                    v-reveal="80"
                    class="photo-zoom relative mb-[30px] h-[322px] w-full overflow-hidden rounded-[24px] bg-[#161d27]"
                    :class="{ 'cursor-pointer': !isBroken(imageOf(product)) }"
                    @click="openLightbox(imageOf(product))"
                >
                    <img
                        v-if="!isBroken(imageOf(product))"
                        :src="imageOf(product)!"
                        class="absolute inset-0 h-full w-full object-cover"
                        alt=""
                        @error="markFailed(imageOf(product))"
                    />
                    <img v-else src="/svg/placeholder-eh.svg" class="absolute inset-0 h-full w-full object-contain" alt="" />
                    <div class="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(6,9,13,.6))]" />
                </div>
                <div
                    v-for="combo in combosOf(product)"
                    :key="combo.key"
                    v-reveal
                    class="flex items-baseline gap-[28px] border-b border-white/6 py-[24px]"
                >
                    <ProductRow
                        :label="getComboLabel(product, combo, appStore.language)"
                        :price="combo.variant2.PRECIO"
                        :description="getDescription(combo.variant2, appStore.language)"
                    />
                </div>
            </div>
        </template>

        <Transition name="lightbox">
            <ImageLightbox v-if="lightboxImage" :src="lightboxImage" @close="lightboxImage = null" />
        </Transition>
    </section>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/appStore';
import type { ProductWithImage } from '~/types/Categories';
import type { ProductList } from '~/types/ProductList';
import { getComboLabel, getDescription, getProductCombos, getProductName, type ProductCombo } from '~/utils/getTranslates';

const props = defineProps<ProductList>()
const appStore = useAppStore()
const config = useRuntimeConfig()
const { markFailed, isBroken } = useImageFallback()

const combosByProduct = computed(() => new Map(props.products.map(product => [product.ID, getProductCombos(product)])))
const combosOf = (product: ProductWithImage): ProductCombo[] => combosByProduct.value.get(product.ID) ?? []

const imageOf = (product: ProductWithImage) => {
    const url = product.images.find(img => img.principal_image === 1)?.url
    return url ? `${config.public.OUR_EH_CAFETERIA_BASE_URL}${url}` : null
}

const lightboxImage = ref<string | null>(null)
const openLightbox = (image: string | null) => {
    if (isBroken(image)) return
    lightboxImage.value = image
}
</script>
