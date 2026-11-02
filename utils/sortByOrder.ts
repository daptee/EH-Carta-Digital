// Misma regla que el admin y la app Suites: primero lo que está en `order`, en ese orden; después el resto
// (nuevo o sin ordenar), en el orden en que venía. `order` vacío = sin cambios (queda el orden por defecto).
export const sortByOrder = <T>(items: T[], order: string[] | undefined, getId: (item: T) => string | number): T[] => {
  if (!order?.length) return items
  const pos = new Map(order.map((id, i) => [String(id), i]))
  return [...items].sort((a, b) => (pos.get(String(getId(a))) ?? Infinity) - (pos.get(String(getId(b))) ?? Infinity))
}
