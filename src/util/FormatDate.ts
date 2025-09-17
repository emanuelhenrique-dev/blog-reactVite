export function formatDate(isoString: string) {
  const date = new Date(isoString);

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

//ex output =>  "01 de dezembro de 2024"
