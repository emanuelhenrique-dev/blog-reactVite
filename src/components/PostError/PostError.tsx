import { useRouteError } from 'react-router-dom';

export function PostError() {
  const error = useRouteError();

  let message = 'Erro desconhecido';

  if (error instanceof Response) {
    // pega a mensagem do JSON enviado pelo loader
    error.text().then((text) => {
      try {
        message = JSON.parse(text)?.message || message;
      } catch {
        message = text || message;
      }
    });
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Ops!</h2>
      <p>{message}</p>
    </div>
  );
}
