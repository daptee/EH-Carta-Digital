import type { ProductWithImage } from "./Categories"
import type { HiddenProductParts } from "./AppConfig"

export interface ProductList {
    title: string
    products: ProductWithImage[]
    // Títulos y banners ocultos desde el admin (sin dato = se muestra todo).
    hidden?: HiddenProductParts
}
