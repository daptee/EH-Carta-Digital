export interface Product {
    ID: string
    NOMRE: string
    NOMRE_ENG: string
    NOMRE_POR: string
    RUBRO: string
    RUBROD: string
    RUBROD_ENG: string
    RUBROD_POR: string
    VARIANTES1: Variant[]
}

interface Variant {
    VAR1: string
    VARIACION1: string
    VARIACION1_ENG: string
    VARIACION1_POR: string
    VARIACION1_TIT: string
    VARIACION1_TIT_ENG: string
    VARIACION1_TIT_POR: string
    VARIANTES2: Variant2[]
}

interface Variant2 {
    VAR2: string
    VARIACION2_TIT: string
    VARIACION2_TIT_ENG: string
    VARIACION2_TIT_POR: string
    VARIACION2: string
    VARIACION2_ENG: string
    VARIACION2_POR: string
    PRECIO: string
    PRECIO_DOLAR: string
    STOCK: string
    DISPONIBILIDAD: string
    DESCRIPCION: string
    DESCRIPCION_ENG: string
    DESCRIPCION_POR: string
    ESPECIFICACIONES: string
    ESPECIFICACIONES_ENG: string
    ESPECIFICACIONES_POR: string
    IVA_TASA: string
}

export interface ProductImage {
    banner_image: number
    created_at: string
    deleted_at: string
    id: number
    principal_image: number
    product_code: number
    updated_at: string
    url: string
}