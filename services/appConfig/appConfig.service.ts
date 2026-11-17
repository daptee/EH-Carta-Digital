import type { AppConfigResponse, HiddenProductParts } from "~/types/AppConfig"

const idList = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter(id => typeof id === 'string' || typeof id === 'number').map(String) : []

// Rubros ocultos por defecto (sin `hidden_categories` en el config): 25 PRINCIPALES, 29 SERVICIOS SUITES.
const DEFAULT_HIDDEN_CATEGORIES = ['25', '29']

// Lo ocultado desde el admin (editor de la carta digital): títulos, banners y rubros.
export const fetchHiddenProductParts = async (): Promise<HiddenProductParts> => {
  const config = useRuntimeConfig()
  const response: AppConfigResponse =
    await $fetch(`${config.public.OUR_EH_INTERNAL_BASE_URL}/api/app-config/carta_digital`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })

  const categories = response.config?.hidden_categories
  return {
    titles: idList(response.config?.hidden_product_titles),
    banners: idList(response.config?.hidden_product_banners),
    categories: Array.isArray(categories) ? idList(categories) : [...DEFAULT_HIDDEN_CATEGORIES],
  }
}

export const defaultHiddenParts = (): HiddenProductParts => ({ titles: [], banners: [], categories: [...DEFAULT_HIDDEN_CATEGORIES] })
