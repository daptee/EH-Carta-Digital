export const fetchCategoryProducts = async (categoryId: number) => {
  try {
    const config = useRuntimeConfig()
    const response: { data: any[]; message: string; metadata: any } =
      await $fetch(`${config.public.INTERNAL_EH_BASE_URL}/RUBROS?SECTOR=${categoryId}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })

    return response.data
  } catch (error) {
    throw error
  }
}
