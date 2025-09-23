import type { Product, ProductImage } from "~/types/Products"

export const fetchProducts = async (categoryId: number) => {
  try {
    const config = useRuntimeConfig()
    const response: Product[] =
      await $fetch(`${config.public.INTERNAL_EH_BASE_URL}/Articulos?SECTOR=${categoryId}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })

    return response
  } catch (error) {
    throw error
  }
}

export const fetchProductsImages = async () => {
  try {
    const config = useRuntimeConfig()
    const response: { products_images: ProductImage[]} =
      await $fetch(`${config.public.OUR_EH_CAFETERIA_BASE_URL}/api/product/images_principal`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })

    return response.products_images
  } catch (error) {
    throw error
  }
}