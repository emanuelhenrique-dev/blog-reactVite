import { ArrowLeftIcon } from '@phosphor-icons/react';
import {
  ButtonsAction,
  type ButtonsActionProps
} from '../ButtonsAction/ButtonsAction';
import {
  ActionsBar,
  Dates,
  HeaderTop,
  PageHeaderContainer
} from './PageHeader.style';

interface PageHeaderProps extends ButtonsActionProps {
  title: string; // Título principal (ex: "Gerenciamento dos Posts")
  onLogout?: () => void; // Botão de desconectar (opcional)
  onBack?: () => void; //Botão para retorna para a pagina anterior (opcional)
  action: string;
  username?: string;
  lastUpdateAuthor?: string; // Nome do usuário (opcional)
  createdAt?: string; // Data de criação (para páginas de post)
  updatedAt?: string; // Data de atualização (para páginas de post)
}

export function PageHeader({
  title,
  onLogout,
  onBack,
  action,
  username,
  lastUpdateAuthor,
  createdAt,
  updatedAt,
  primaryAction,
  secondaryAction
}: PageHeaderProps) {
  return (
    <PageHeaderContainer>
      <HeaderTop>
        <h2>{title}</h2>
        {onLogout && (
          <button onClick={onLogout}>
            <ArrowLeftIcon width={22} /> Desconectar
          </button>
        )}
        {onBack && (
          <button onClick={onBack}>
            <ArrowLeftIcon width={22} />
            voltar
          </button>
        )}
      </HeaderTop>

      <ActionsBar>
        <div className="info">
          {username && (
            <p>
              {action} <span>{username}</span>
            </p>
          )}

          {(createdAt || updatedAt) && (
            <Dates>
              {createdAt && <p>Post criado no dia {createdAt}</p>}
              {updatedAt && (
                <p title={lastUpdateAuthor}>
                  Data da Ultima atualização({lastUpdateAuthor}) : {updatedAt}
                </p>
              )}
            </Dates>
          )}
        </div>

        <ButtonsAction
          primaryAction={primaryAction}
          direction={'column'}
          secondaryAction={secondaryAction}
        />
      </ActionsBar>
    </PageHeaderContainer>
  );
}
