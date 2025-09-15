export function formatNewDate() {
  const date = new Date();

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

//ex output =>  "01 de dezembro de 2024"
