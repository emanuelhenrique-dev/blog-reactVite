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
import { useNavigate } from 'react-router-dom';
import { AdminUsers } from '../../data/users';

//interfaces
interface LoginProps {
  Text: string;
  type?: 'admin' | 'user';
}

export function Login({ Text, type }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const user = AdminUsers.find(
      (u) => u.username === username.trim() && u.password === password
    );

    if (user) {
      localStorage.setItem('isLoggedInAdmin', 'true');
      localStorage.setItem('adminUser', JSON.stringify(user));
      navigate('/dashboard2490admin/posts-manager');
    } else {
      setError('Usuário ou senha inválidos');
    }
  }

  return (
    <Container>
      <LoginContainer>
        <h2>{Text}</h2>

        <FormContainer onSubmit={handleSubmit}>
          <TextBox>
            <input
              required
              type="text"
              placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Usuário</label>
          </TextBox>

          <TextBox>
            <PasswordWrapper>
              <input
                required
                type={showPassword ? 'text' : 'password'}
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {type !== 'admin' && (
            <CheckboxContainer>
              <label>
                <input id="toggle" type="checkbox" />
                <span> Lembre-se de mim</span>
                <span className="slider"></span>
              </label>
              <a href="#">Esqueceu a senha?</a>
            </CheckboxContainer>
          )}
          <Button $variant="blue" type="submit">
            Entrar
          </Button>
        </FormContainer>

        <Divider></Divider>
        {type !== 'admin' && (
          <>
            <Button $variant="black">
              <img src={GoogleArt} alt="" /> Ou faça login com o Google{' '}
            </Button>
            <FooterLink>
              Não tem uma conta? <a href="#">Cadastre-se</a>
            </FooterLink>
          </>
        )}
      </LoginContainer>
    </Container>
  );
}
