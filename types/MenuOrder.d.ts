// Orden de la carta cargado desde el admin (`GET /api/menu-order/carta_digital`, OUR_EH_INTERNAL_BASE_URL, público).
// Independiente del de la carta de la app Suites. IDs = los de RUBROS / Articulos, siempre como string.
// Lista vacía (o rubro ausente en `products`) = sin orden propio: se usa el orden por defecto.
export interface MenuOrder {
    categories: string[]
    products: Record<string, string[]>
}
