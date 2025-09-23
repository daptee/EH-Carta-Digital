export const formatPrice = (value: number | string) => {
  if (!value) return '0';
  const number = typeof value === 'string' ? parseFloat(value) : value;
  return number.toLocaleString('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};
