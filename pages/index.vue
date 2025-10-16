<template>
<main class="max-w-[1080px] w-full min-h-screen flex flex-col bg-mainBlue">
  <FrontCover v-show="showFrontCover" @close="showFrontCover = false" />

  <section
    v-show="!showFrontCover"
    class="flex flex-col flex-1  bg-mainBlue h-full"
  >
    <header class="bg-mainBlue w-full pt-[112px] px-[107px] flex-shrink-0">
      <div class="flex items-center justify-between">
        <Logo class="w-[270px]" />
        <Languages />
      </div>
    </header>

    <div class="flex-1 flex items-center justify-center" v-if="isLoading">
      <svg
        class="animate-spin h-40 w-40 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </div>

    <div v-else>
      <HeaderList v-model:selectedCategory="selectedCategory" :categories="categories" />

      <article
        v-for="category in categories"
        :key="category.ID"
        :id="category.ID"
        class="category-section"
      >
        <section class="flex flex-col header-section pt-[127px]">
          <HeaderCategory
            :title="getCategoryTitle(category, language.language)"
            :img="category.img"
          />
        </section>
        <CafeLanding v-if="category.RUBRO === 'CAFETERIA'" />
        <ProductsList :title="category.RUBRO" :products="category.products" />
      </article>
    </div>
  </section>
</main>

</template>

<script setup lang="ts">
import { fetchCategories, fetchCategoryImages } from '~/services/categories/categories.service';
import { fetchProducts, fetchProductsImages } from '~/services/categories/products.service';
import { useAppStore } from '~/store/appStore';
import type { CategoryWithImage } from '~/types/Categories';
import { getCategoryTitle } from '~/utils/getTranslates';
import { onMounted, onBeforeUnmount, nextTick, watch, ref } from 'vue';

const showFrontCover = ref(true)
const config = useRuntimeConfig()
const categories = ref<CategoryWithImage[]>([])
const language = useAppStore()
const selectedCategory = ref<string | number | null>(null)
const isLoading = ref(false)

const getCategoryProducts = async () => {
  try {
    isLoading.value = true
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
                images: productImages.map(imgProd => ({ ...imgProd }))
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
    categories.value = []
  } finally {
    isLoading.value = false
  }
}

let observer: IntersectionObserver | null = null

const setupObserver = async () => {
  await nextTick()

  if (observer) {
    observer.disconnect()
    observer = null
  }

  const options: IntersectionObserverInit = {
    root: null,
    threshold: 0,
    rootMargin: "-80% 0px -20% 0px",
  }

  observer = new IntersectionObserver((entries) => {
    const mapped = entries.map(e => ({
      id: (e.target as HTMLElement).id,
      ratio: e.intersectionRatio,
      isIntersecting: e.isIntersecting,
      boundingClientRectTop: e.boundingClientRect.top
    }))

    const visible = entries.filter(e => e.isIntersecting)
    if (visible.length === 0) return

    visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
    const top = visible[0]
    const id = (top.target as HTMLElement).id

    if (id && selectedCategory.value !== id) {
      selectedCategory.value = id
    }
  }, options)

  categories.value.forEach(cat => {
    const el = document.getElementById(cat.ID)

    if (el) {
      observer!.observe(el)
    }
  })
}

onMounted(async () => {
  await getCategoryProducts()
  if (categories.value.length) {
    selectedCategory.value = String(categories.value[0].ID)
  }

  await setupObserver()
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>



<style scoped>
.header-section {
  background: linear-gradient(357.82deg,
      #958077 5.36%,
      #8C7973 12.18%,
      #736869 18.7%,
      #5B565E 24.92%,
      #4A4B57 30.85%,
      #414552 37.65%,
      #3E4351 44.18%);
}

;
</style>