export const FormatValue = {
  currency(value: string) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
      .format(Number(value))
      .replace(/^(\D+)/, '$1 ');
  },
  dateFullYear(date: Date) {
    return Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(date).getTime());
  },
  dateLongYear(date: Date) {
    return Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
    }).format(date);
  },
};
