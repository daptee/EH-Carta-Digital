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

export interface ProductCombo {
    key: string
    variant: Variant
    variant2: Variant2
}

/** Every VARIACION1 × VARIACION2 pair of a product, flattened — one menu row each. */
export const getProductCombos = (product: Product): ProductCombo[] => {
    return product.VARIANTES1.flatMap(variant =>
        variant.VARIANTES2.map(variant2 => ({ key: `${variant.VAR1}-${variant2.VAR2}`, variant, variant2 }))
    )
}

export const getComboLabel = (product: Product, combo: ProductCombo, language: string) => {
    const label1 = getProductTitle(combo.variant, language)
    const label2 = getProductTitle2(combo.variant2, language)
    if (label1 && label2) return `${label1} - ${label2}`
    return label1 || label2 || getProductName(product, language)
}
