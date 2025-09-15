export interface Category {
    ID: string
    RUBRO: string
    RUBRO_ENG: string
    RUBRO_POR: string
    TOTAL: string
}

export interface CategoryImage {
    cod_category: string
    color: string
    created_at: string
    id: number
    img: string | null
    sector: null
    updated_at: string
}

export interface CategoryWithImage extends Category {
  img: string | null
  color: string | null
}