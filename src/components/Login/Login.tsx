// react imports
import { useState } from 'react';

//style
import {
  Button,
  CheckboxContainer,
  Container,
  Divider,
  FooterLink,
  FormContainer,
  LoginContainer,
  PasswordWrapper,
  TextBox,
  TogglePasswordButton
} from './Login.style';

// assets imports
import GoogleArt from '/google-art.png';
import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react';

//interfaces
interface LoginProps {
  Text: string;
}

export function Login({ Text }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <LoginContainer>
        <h2>{Text}</h2>

        <FormContainer>
          <TextBox>
            <input required type="text" placeholder="" />
            <label>Usuário</label>
          </TextBox>

          <TextBox>
            <PasswordWrapper>
              <input
                required
                type={showPassword ? 'text' : 'password'}
                placeholder=""
              />
              <label>Senha</label>
              <TogglePasswordButton
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeSlashIcon size={20} weight="fill" />
                ) : (
                  <EyeIcon size={20} weight="fill" />
                )}
              </TogglePasswordButton>
            </PasswordWrapper>
          </TextBox>

          <CheckboxContainer>
            <label>
              <input id="toggle" type="checkbox" />
              <span> Lembre-se de mim</span>
              <span className="slider"></span>
            </label>
            <a href="#">Esqueceu a senha?</a>
          </CheckboxContainer>
          <Button variant="blue" type="submit">
            Entrar
          </Button>
        </FormContainer>
        <Divider></Divider>
        <Button variant="black">
          <img src={GoogleArt} alt="" /> Ou faça login com o Google{' '}
        </Button>
        <FooterLink>
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </FooterLink>
      </LoginContainer>
    </Container>
  );
}
