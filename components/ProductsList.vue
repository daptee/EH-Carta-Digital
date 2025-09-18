<template>
    <section class="bg-mainBlue">
        <h1 class="text-[40px] font-bold text-white">{{ props.title }}</h1>
        <div v-for="value in props.products" :key="value.ID" class="flex flex-col gap-[20px]">
            <UniqueProduct v-if="value.VARIANTES1.length === 1" :product="value" />
        </div>
    </section>
</template>
<script setup lang="ts">
import type { ProductList } from '~/types/ProductList';

const props = defineProps<ProductList>()

</script>