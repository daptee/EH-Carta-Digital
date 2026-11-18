import type { Product, ProductImage, VariationImages } from "~/types/Products"

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

// Imágenes de cada variante de un artículo (`"<VAR1>.<VAR2>"` → ruta). No vienen en `images_principal`, así
// que se piden por artículo (solo para los que tienen varias variantes).
export const fetchVariantImages = async (productId: string): Promise<Record<string, string>> => {
  const config = useRuntimeConfig()
  const response: { variations_images?: VariationImages[] } =
    await $fetch(`${config.public.OUR_EH_CAFETERIA_BASE_URL}/api/product/images/${productId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })

  return Object.fromEntries(
    (response.variations_images ?? []).flatMap(v => (v.images[0]?.url ? [[v.variation, v.images[0].url]] : []))
  )
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