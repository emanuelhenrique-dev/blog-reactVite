import { ArrowLeftIcon } from '@phosphor-icons/react';

import { useNavigate } from 'react-router-dom';
import { ContactPageContainer, ContentContainer } from './ContactPage.styles';

export function ContactPage() {
  const navigate = useNavigate();

  return (
    <ContactPageContainer>
      <div className="back-button">
        <button onClick={() => navigate(-1)}>
          <ArrowLeftIcon width={22} />
          voltar
        </button>
      </div>

      <ContentContainer>
        <h2>Contanto</h2>
      </ContentContainer>
    </ContactPageContainer>
  );
}
