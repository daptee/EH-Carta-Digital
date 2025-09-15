import type { Category, CategoryImage } from "~/types/Categories"

export const fetchCategories = async (categoryId: number) => {
  try {
    const config = useRuntimeConfig()
    const response: Category[] =
      await $fetch(`${config.public.INTERNAL_EH_BASE_URL}/RUBROS?SECTOR=${categoryId}`, {
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

export const fetchCategoryImages = async () => {
  try {
    const config = useRuntimeConfig()
    const response: { categories: CategoryImage[]} =
      await $fetch(`${config.public.OUR_EH_CAFETERIA_BASE_URL}/api/categories`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })

    return response.categories
  } catch (error) {
    throw error
  }
}