import {
  AboutContainer,
  AboutPageContainer,
  ContentContainer
} from './AboutPage.styles';
import { SVGImage } from '../../components/SVGImage/SVGImage';
import twitterLogo from '/twitter.svg';
import facebookLogo from '/facebook.svg';
import instagramLogo from '/instagram.svg';
import whatsappLogo from '/whatsapp.svg';
import linkedinLogo from '/linkedin.svg';

export function AboutPage() {
  return (
    <AboutPageContainer>
      {/* <div className="back-button">
        <button onClick={() => navigate(-1)}>
          <ArrowLeftIcon width={22} />
          voltar
        </button>
      </div> */}

      <ContentContainer>
        <AboutContainer>
          <div className="about-blog">
            <h2>Sobre nós</h2>
            <p>
              Este blog foi criado para compartilhar conteúdos sobre tecnologia,
              programação, design e outros assuntos relacionados. A ideia é ser
              um espaço de aprendizado e troca de conhecimento, Blog feito por
              Emanuel Henrique enquanto estudava React e typescript
            </p>
          </div>
          <div className="divider">
            <span></span>
          </div>
          <div className="about-author">
            <p>
              Manoel Silva, um entusiasta da tecnologia e da criação de conteúdo
              digital. A missão é oferecer artigos, tutoriais e reflexões que
              inspirem e ajudem pessoas interessadas em aprender mais sobre o
              universo da tecnologia e desenvolvimento.
            </p>
            <div className="author-social">
              <a href="">
                <SVGImage src={twitterLogo} alt="twitter" />
              </a>
              <a href="">
                <SVGImage src={facebookLogo} alt="facebook" />
              </a>
              <a href="">
                <SVGImage src={instagramLogo} alt="instragam" />
              </a>
              <a href="">
                <SVGImage src={linkedinLogo} alt="linkedin" />
              </a>
              <a href="">
                <SVGImage src={whatsappLogo} alt="whatsapp" />
              </a>
            </div>
          </div>
        </AboutContainer>
      </ContentContainer>
    </AboutPageContainer>
  );
}
