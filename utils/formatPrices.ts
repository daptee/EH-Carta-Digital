export const formatPrice = (value: number | string, language: string) => {
  if (!value) return '0';

  const number =
    typeof value === 'string'
      ? Number(
          value
            .replace(/\./g, '') // quita separadores de miles
            .replace(',', '.')  // convierte coma decimal
        )
      : value;

  if (isNaN(number)) return '0';

  return number.toLocaleString('es-AR', {
    minimumFractionDigits: language === 'es' ? 0 : 2,
    maximumFractionDigits: language === 'es' ? 0 : 2
  });
};
