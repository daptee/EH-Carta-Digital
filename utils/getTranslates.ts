import type { CategoryWithImage } from "~/types/Categories"
import type { Product, Variant, Variant2 } from "~/types/Products"

export const getCategoryTitle = (category: CategoryWithImage, language: string) => {
  switch (language) {
    case 'es':
      return category.RUBRO
    case 'en':
      return category.RUBRO_ENG
    case 'pt':
      return category.RUBRO_POR
    default:
     return category.RUBRO
  }
}

export const getProductName = (product: Product, language: string) => {
  switch (language) {
    case 'es':
      return product.NOMRE
    case 'en':
      return product.NOMRE_ENG
    case 'pt':
      return product.NOMRE_POR
    default:
      return product.NOMRE
  }
}

export const getDescription = (variant: Variant2, language: string) => {
    switch (language) {
        case 'es':
            return variant.DESCRIPCION
        case 'en':
            return variant.DESCRIPCION_ENG
        case 'pt':
            return variant.DESCRIPCION_POR
        default:
            return variant.DESCRIPCION
    }
}

export const getPrice = (variant: Variant2, language: string) => {
    switch (language) {
        case 'es':
            return variant.PRECIO
        case 'en':
            return variant.PRECIO
        case 'pt':
            return variant.PRECIO
        default:
            return variant.PRECIO
    }
}

export const getProductTitle = (variant: Variant, language: string) => {
    switch (language) {
        case 'es':
            return variant.VARIACION1
        case 'en':
            return variant.VARIACION1_ENG
        case 'pt':
            return variant.VARIACION1_POR
        default:
            return variant.VARIACION1
    }
}

export const getProductTitle2 = (variant: Variant2, language: string) => {
    switch (language) {
        case 'es':
            return variant.VARIACION2
        case 'en':
            return variant.VARIACION2_ENG
        case 'pt':
            return variant.VARIACION2_POR
        default:
            return variant.VARIACION2
    }
}