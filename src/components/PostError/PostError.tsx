import { useEffect, useState } from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { ErrorPostContainer } from './PostError.style';
import { QuestionMarkIcon } from '@phosphor-icons/react';

export function PostError() {
  const error = useRouteError();
  const [message, setMessage] = useState('Erro desconhecido');

  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      // Quando o loader ou action joga um Response, o react-router coloca em error.data
      setMessage(error.data?.message || `Erro ${error.status}`);
    } else if (error instanceof Error) {
      setMessage(error.message);
    } else if (typeof error === 'string') {
      setMessage(error);
    }
  }, [error]);

  console.log(error);

  return (
    <ErrorPostContainer>
      <div className="container">
        <h2>Ops!</h2>
        <p>{message}</p>
        <div className="box">
          <QuestionMarkIcon />
        </div>
      </div>
    </ErrorPostContainer>
  );
}
