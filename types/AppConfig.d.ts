// Config de la carta cargado desde el admin (`GET /api/app-config/carta_digital`, OUR_EH_INTERNAL_BASE_URL,
// público). JSON libre: solo se leen estas claves (mantener en sync con `CARTA_HIDDEN_KEYS` y
// `MENU_HIDDEN_CATEGORIES_KEY` de EH-Admin2.0).
// `hidden_product_titles` / `hidden_product_banners`: IDs de artículos con varias variantes cuyo título
// (nombre con el ícono) o banner (foto) no se muestran.
// `hidden_categories`: IDs de rubros que no se muestran. Sin la clave, los de siempre (25 y 29).
export interface AppConfigResponse {
    config: Record<string, unknown>
}

export interface HiddenProductParts {
    titles: string[]
    banners: string[]
    categories: string[]
}
