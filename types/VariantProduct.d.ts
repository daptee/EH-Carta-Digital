import type { ProductImage, Variant } from "./Products"

export interface VariantProductProps {
    title: string
    variants: Variant[]
    images: ProductImage[]
}