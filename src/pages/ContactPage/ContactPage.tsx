import { EnvelopeSimpleIcon, PhoneIcon } from '@phosphor-icons/react';
import {
  ContactForm,
  ContactPageContainer,
  ContentContainer,
  TextBoxContact
} from './ContactPage.styles';
import { Button } from '../../components/Login/Login.style';

export function ContactPage() {
  return (
    <ContactPageContainer>
      <ContentContainer>
        <div className="Heading">
          <h2>Contate-nos</h2>
        </div>
        <div className="main-content">
          <div className="wrapper">
            <div className="hero">
              <div>
                <span>
                  <EnvelopeSimpleIcon size={22} />
                  info@example.com
                </span>
                <span>
                  <PhoneIcon size={22} />
                  0864003-8547
                </span>
              </div>
            </div>
            <div className="form-container">
              <ContactForm>
                <h3>Entre em contato</h3>
                <TextBoxContact>
                  <input required type="text" placeholder="" />
                  <label>Nome</label>
                </TextBoxContact>

                <TextBoxContact>
                  <input required type="text" placeholder="" />
                  <label>E-mail</label>
                </TextBoxContact>

                <textarea
                  required
                  placeholder="O que você gostaria de dizer?"
                ></textarea>

                <Button $variant="blue" type="submit">
                  Enviar Mensagem
                </Button>
              </ContactForm>
            </div>
          </div>
        </div>
      </ContentContainer>
    </ContactPageContainer>
  );
}
