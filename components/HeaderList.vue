<template>
  <div class="carousel pb-[80px]">
    <ul class="carousel-track">
      <li v-for="category in categories" :key="category.ID" class="carousel-item flex items-center gap-[9px]">
        <div class="border-[2px] border-[#656874] rounded-full w-fit ">
          <img v-if="category.img" :src="category.img" class="w-[69px] h-[69px] p-2 border-[2px] rounded-full border-[#848690] bg-white" alt="Icono de categoria">
          <IconsPlaceholder v-else class="w-[69px] h-[69px] p-2 border-[2px] rounded-full border-[#848690] bg-white" />
        </div>
        <span class="text-[20px] font-bold text-white">{{ category.RUBRO }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { fetchCategories, fetchCategoryImages } from '~/services/categories/categories.service';
import { fetchProducts, fetchProductsImages } from '~/services/categories/products.service';
import type { CategoryWithImage } from '~/types/Categories';

const config = useRuntimeConfig()
const categories = ref<CategoryWithImage[]>([])

const getCategoryProducts = async () => {
  try {
    const categoriesResponse = await fetchCategories(3)
    const imagesResponse = await fetchCategoryImages()
    const productsResponse = await fetchProducts(3)
    const imagesProductsResponse = await fetchProductsImages()

    console.log('productsResponse', productsResponse)
    console.log('imagesProductsResponse', imagesProductsResponse)
    

    categories.value = categoriesResponse
      .map(cat => {
        const imageData = imagesResponse.find(img => img.cod_category === cat.ID)
        return {
          ...cat,
          img: imageData?.img ? `${config.public.OUR_EH_CAFETERIA_BASE_URL}${imageData.img}` : null,
          color: imageData?.color ?? null,
        }
      })
      .sort((a, b) => {
        if (a.RUBRO === 'CAFETERIA') return -1
        if (b.RUBRO === 'CAFETERIA') return 1
        return 0
      })
  } catch (err) {
    console.error('Error al buscar las categorias: ', err)
    categories.value = []
  }
}

getCategoryProducts()
</script>

<style scoped>
.carousel {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.carousel-track {
  display: flex;
  gap: 2rem;
}

.carousel-item {
  flex: 0 0 auto;
  scroll-snap-align: start;
  text-align: center;
}
</style>