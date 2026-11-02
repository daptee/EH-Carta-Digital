import type { MenuOrder } from "~/types/MenuOrder"

export const fetchMenuOrder = async (): Promise<MenuOrder> => {
  const config = useRuntimeConfig()
  const response: { categories?: string[], products?: Record<string, string[]> | unknown[] } =
    await $fetch(`${config.public.OUR_EH_INTERNAL_BASE_URL}/api/menu-order/carta_digital`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })

  // `products` viene como `[]` (no `{}`) desde PHP cuando no hay nada guardado.
  return {
    categories: response.categories ?? [],
    products: response.products && !Array.isArray(response.products) ? response.products : {},
  }
}
