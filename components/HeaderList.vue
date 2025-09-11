<template>
    <ul>
        <li>Cafeteria</li>
    </ul>

    {{ categories }}
</template>

<script setup lang="ts">
import { fetchCategoryProducts } from '~/services/categories/categories.service';

const categories = ref<any[]>([])


const getCategoryProducts = async () => {

  try {
    const productsResponse = await fetchCategoryProducts(
      2,
    )
    categories.value = productsResponse
  } catch (err) {
    console.error('Error al buscar los productos de la categoria: ', err)
    categories.value = []
  }
}

getCategoryProducts()

</script>