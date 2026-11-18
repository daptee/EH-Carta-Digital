import type { Product } from "~/types/Products"

// `/Articulos` a veces devuelve el mismo artículo más de una vez (mismo ID), p. ej. una copia con sus
// variantes y otra con `VARIANTES1: []`. Como la carta indexa por ID, la copia vacía pisaba a la buena y
// el artículo no se mostraba (rubro 18 VIANDAS, 227 CHOCOLATADA). Acá se unifican en uno solo, juntando
// las variantes sin repetir, y se descartan los que quedan sin ninguna variante para mostrar.
export const mergeDuplicateProducts = (products: Product[]): Product[] => {
  const byId = new Map<string, Product>()

  for (const product of products) {
    const id = String(product.ID)
    const existing = byId.get(id)

    if (!existing) {
      byId.set(id, { ...product, VARIANTES1: [...(product.VARIANTES1 ?? [])] })
      continue
    }

    for (const variant of product.VARIANTES1 ?? []) {
      if (!existing.VARIANTES1.some(v => v.VAR1 === variant.VAR1)) existing.VARIANTES1.push(variant)
    }
  }

  return [...byId.values()].filter(product =>
    product.VARIANTES1.some(variant => variant.VARIANTES2?.length)
  )
}
