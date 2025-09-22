<template>
    <section class="bg-mainBlue px-[87px] py-[94px] flex flex-col gap-[13px]">
        <div v-for="value in props.products" :key="value.ID">
            <UniqueProduct v-if="value.VARIANTES1.length === 1" :product="value" />
            <VariantProduct v-if="value.VARIANTES1.length > 1" :title="getProductName(value, appStore.language)" :variants="value.VARIANTES1" :images="value.images" />
            </div>
    </section>
</template>
<script setup lang="ts">
import { useAppStore } from '~/store/appStore';
import type { ProductList } from '~/types/ProductList';

const props = defineProps<ProductList>()
const appStore = useAppStore()

</script>