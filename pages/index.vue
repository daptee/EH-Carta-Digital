<template>
    <main class="max-w-[1080px]">
        <FrontCover v-if="showFrontCover" @close="showFrontCover = false" />
        
        <section v-else>
          <header class="bg-mainBlue w-full pt-[112px] px-[107px]">
            <div class="flex items-center justify-between">
              <Logo class="w-[270px]" />
              <Languages />
            </div>
        </header>
        
        <HeaderList :categories="categories" />

        <article v-for="category in categories" :key="category.ID" :id="category.ID">
            <section class="flex flex-col header-section pt-[127px]">
                <HeaderCategory :title="getCategoryTitle(category, language.language)" :img="category.img" />
            </section>
            <CafeLanding v-if="category.RUBRO === 'CAFETERIA'" />
            <ProductsList :title="category.RUBRO" :products="category.products" />
        </article>
        </section>
    </main>
</template>

<script setup lang="ts">
import { fetchCategories, fetchCategoryImages } from '~/services/categories/categories.service';
import { fetchProducts, fetchProductsImages } from '~/services/categories/products.service';
import { useAppStore } from '~/store/appStore';
import type { CategoryWithImage } from '~/types/Categories';
import { getCategoryTitle } from '~/utils/getTranslates';

const showFrontCover = ref(true)
const config = useRuntimeConfig()
const categories = ref<CategoryWithImage[]>([])
const language = useAppStore()

const getCategoryProducts = async () => {
  try {
  
    const [
      categoriesResponse,
      imagesResponse,
      productsResponse,
      imagesProductsResponse
    ] = await Promise.all([
      fetchCategories(3),
      fetchCategoryImages(),
      fetchProducts(3),
      fetchProductsImages()
    ])

    categories.value = categoriesResponse
      .map(cat => {
        const imageData = imagesResponse.find(img => img.cod_category === cat.ID)

        return {
          ...cat,
          img: imageData?.img ? `${config.public.OUR_EH_CAFETERIA_BASE_URL}${imageData.img}` : null,
          color: imageData?.color ?? null,
          products: productsResponse
            .filter(product => product.RUBRO === cat.ID)
            .map(product => {
              const productImages = imagesProductsResponse.filter(
                imgProd => imgProd.product_code.toString() === product.ID.toString()
              )

              return {
                ...product,
                images: productImages.map(imgProd => ({
                  ...imgProd
                }))
              }
            })
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
.header-section {
    background: linear-gradient(
      357.82deg, 
      #958077 5.36%, 
      #8C7973 12.18%, 
      #736869 18.7%, 
      #5B565E 24.92%, 
      #4A4B57 30.85%, 
      #414552 37.65%, 
      #3E4351 44.18%
    );
};
</style>