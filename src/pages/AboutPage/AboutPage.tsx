import { ArrowLeftIcon } from '@phosphor-icons/react';
import { AboutPageContainer, ContentContainer } from './AboutPage.styles';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <AboutPageContainer>
      <div className="back-button">
        <button onClick={() => navigate(-1)}>
          <ArrowLeftIcon width={22} />
          voltar
        </button>
      </div>

      <ContentContainer>
        <h2>Sobre</h2>
      </ContentContainer>
    </AboutPageContainer>
  );
}
