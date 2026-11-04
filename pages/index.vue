<template>
<main class="max-w-[1080px] w-full min-h-screen flex flex-col bg-bg font-body">
  <Transition name="cover">
    <FrontCover v-show="showFrontCover" @close="showFrontCover = false" />
  </Transition>

  <Transition name="menu">
  <section v-show="!showFrontCover" class="flex flex-col flex-1 bg-bg">
    <!-- Whole menu rendered at 80%, same as EH Café in the app suite. CSS `zoom` (unlike
         `transform: scale`) also shrinks the layout box, so scrolling and the sticky nav keep working. -->
    <div class="flex flex-col flex-1" :style="{ zoom: MENU_ZOOM }">
      <header class="flex flex-shrink-0 items-center justify-between border-b border-white/8 px-[48px] py-[28px]">
        <button type="button" aria-label="Portada" @click="showFrontCover = true">
          <img src="/logos/eh-logo-horizontal-blanco.svg" class="w-[240px]" alt="EH Boutique Experience" />
        </button>
        <Languages />
      </header>

      <!-- Enter-only fade: the outgoing branch leaves instantly so the content is in the DOM right
           away for `setupObserver()` (an out-in transition would delay it past that nextTick). -->
      <Transition name="swap">
      <div v-if="isLoading" class="flex flex-1 flex-col items-center justify-center gap-[24px] py-[200px]">
        <span class="h-[64px] w-[64px] animate-spin rounded-full border-[3px] border-gold/26 border-t-gold" />
        <p class="font-body text-[22px] font-light tracking-[0.06em] text-muted-2">{{ t('menu.loading') }}</p>
      </div>

      <div v-else-if="!categories.length" class="flex flex-1 flex-col items-center justify-center gap-[16px] px-[48px] py-[200px] text-center">
        <span class="ms text-[58px] text-gold/50">restaurant_menu</span>
        <p class="max-w-[520px] font-body text-[22px] font-light text-muted-2">{{ t('menu.error') }}</p>
      </div>

      <div v-else>
        <HeaderList v-model:selectedCategory="selectedCategory" :categories="categories" />

        <article
          v-for="category in categories"
          :key="category.ID"
          :id="category.ID"
          class="category-section scroll-mt-[108px]"
        >
          <HeaderCategory
            :title="getCategoryTitle(category, language.language)"
            :img="category.img"
          />
          <CafeLanding v-if="category.RUBRO === 'CAFETERIA'" />
          <ProductsList :title="category.RUBRO" :products="category.products" />
        </article>
      </div>
      </Transition>
    </div>
  </section>
  </Transition>
</main>

</template>

<script setup lang="ts">
import { fetchCategories, fetchCategoryImages } from '~/services/categories/categories.service';
import { fetchProducts, fetchProductsImages } from '~/services/categories/products.service';
import { useAppStore } from '~/store/appStore';
import type { CategoryWithImage } from '~/types/Categories';
import { getCategoryTitle } from '~/utils/getTranslates';
import { sortByOrder } from '~/utils/sortByOrder';
import { fetchMenuOrder } from '~/services/menuOrder/menuOrder.service';
import { onMounted, onBeforeUnmount, nextTick, watch, ref } from 'vue';

const showFrontCover = ref(true)
const config = useRuntimeConfig()
const categories = ref<CategoryWithImage[]>([])
const language = useAppStore()
const selectedCategory = ref<string | number | null>(null)
const isLoading = ref(true)
const { t } = useTranslate()

const MENU_ZOOM = 0.8

const getCategoryProducts = async () => {
  try {
    isLoading.value = true
    const [
      categoriesResponse,
      imagesResponse,
      productsResponse,
      imagesProductsResponse,
      menuOrder
    ] = await Promise.all([
      fetchCategories(3),
      fetchCategoryImages(),
      fetchProducts(3),
      fetchProductsImages(),
      // Orden cargado desde el admin. Si falla, la carta queda con su orden por defecto.
      fetchMenuOrder().catch(() => null)
    ])

    const EXCLUDED_CATEGORY_IDS = [25, 29] // 25: PRINCIPALES, 29: SERVICIOS SUITES

    categories.value = categoriesResponse
      .filter(cat => !EXCLUDED_CATEGORY_IDS.includes(Number(cat.ID)))
      .map(cat => {
        const imageData = imagesResponse.find(img => img.cod_category === cat.ID)

        return {
          ...cat,
          img: imageData?.img ? `${config.public.OUR_EH_CAFETERIA_BASE_URL}${imageData.img}` : null,
          color: imageData?.color ?? null,
          products: sortByOrder(
            productsResponse.filter(product => product.RUBRO === cat.ID),
            menuOrder?.products[cat.ID],
            product => product.ID
          )
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
      .filter(cat => cat.products.length > 0)
      .sort((a, b) => {
        const orderIds = [
          8,   // CAFETERIA
          32,  // DESAYUNO O MERIENDA
          23,  // PATISSERIE
          27,  // SIN GLUTEN
          19,  // BRUNCH
          14,  // BEBIDAS SIN ALCOHOL
          15,  // BEBIDAS CON ALCOHOL
          18   // VIANDAS
        ]
        
        const getIndex = (id: number | string) => {
          if (!id) return -1
          return orderIds.indexOf(Number(id))
        }

        const indexA = getIndex(a.ID)
        const indexB = getIndex(b.ID)

        if (indexA !== -1 && indexB !== -1) return indexA - indexB
        if (indexA !== -1) return -1
        if (indexB !== -1) return 1
        return 0
      })

    // El orden del admin va encima del orden fijo de arriba (los rubros sin ordenar quedan al final).
    categories.value = sortByOrder(categories.value, menuOrder?.categories, cat => cat.ID)
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
