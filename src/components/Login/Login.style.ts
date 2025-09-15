import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 715px;
  max-height: 633px;

  background: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  box-shadow: 7px 11px 4px rgba(0, 0, 0, 0.25);
  z-index: 3;
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -60px;
    width: 59%;
    height: 80%;
    z-index: -2;
    background: ${(props) => props.theme.colors['blue-primary']};
    border-radius: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: ${(props) => props.theme.colors.background};
    border-radius: 10px;
  }

  // tablet
  @media (max-width: 768px) {
    max-height: calc(100vh - 175px);
    padding: 1.5rem;
    box-shadow: none;

    &::before {
      display: none; // tira o detalhe azul
    }

    &::after {
      display: none; // tira o detalhe azul
    }
  }

  // mobile
  @media (max-width: 480px) {
    padding-top: 40px;
    align-items: flex-start;
    height: auto;
    min-height: 100vh;
    border-radius: 0;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  max-height: 456.5px;

  color: ${(props) => props.theme.colors['base-title']};
  z-index: 3;

  h2 {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 28px;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block: 24px;

  @media (max-width: 480px) {
    gap: 0.75rem;
    margin-block: 16px;
  }
`;

export const TextBox = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid ${(props) => props.theme.colors['base-hover']};
    border-radius: 8px;
    background: ${(props) => props.theme.colors['base-input']};
    color: ${(props) => props.theme.colors['base-title']};
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors['blue-primary']};
    }

    /* faz a label flutuar quando o input tiver valor ou foco */
    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: -0.6rem;
      left: 0.5rem;
      font-size: 1rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
      background: linear-gradient(
        to top,
        ${(props) => props.theme.colors['base-input']} 58%,
        ${(props) => props.theme.colors['background']} 40%
      );
      padding: 0 0.25rem;
    }
  }

  label {
    position: absolute;
    top: 14px;
    left: 16px;
    color: #667085;
    font-size: 1rem;
    pointer-events: none;
    transition: 0.2s ease all;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding-right: 40px; // espaço pro botão do olho
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors['base-title']};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme.colors['blue-primary']};
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 6px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors['base-title']};
  line-height: 20px;
  letter-spacing: 0.3px;

  label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .slider {
      position: absolute;
      left: 0;
      height: 20px;
      width: 40px;
      border-radius: 30px;
      background-color: ${(props) => props.theme.colors['base-input']};
      border: 1px solid ${(props) => props.theme.colors['base-hover']};
      cursor: pointer;
      transition: 0.5s;
      z-index: 99;

      &::before {
        position: absolute;
        left: 1px;
        bottom: 1px;
        height: 16px;
        width: 16px;
        content: '';
        border-radius: 50%;
        background-color: white;
        transition: 0.5s;
      }
    }

    #toggle {
      opacity: 0;

      &:checked {
        & ~ .slider {
          background-color: ${(props) => props.theme.colors.white};
          border: 1px solid ${(props) => props.theme.colors['blue-primary']};
        }
        & ~ .slider:before {
          background-color: ${(props) => props.theme.colors['blue-primary']};
          transform: translate(20px, 0px);
        }
        & ~ .slide-block {
          left: 0;
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }
      }
    }
  }

  input {
    margin-right: 24px;
    margin-bottom: 6px;
    opacity: 0;
  }

  a {
    color: #007aff;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

interface ButtonVariants {
  $variant: 'blue' | 'black';
}

export const Button = styled.button<ButtonVariants>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  padding: 16px;
  border: none;
  border-radius: 8px;

  color: #fff;
  font-weight: bold;
  cursor: pointer;

  // variant blue
  ${(props) =>
    props.$variant === 'blue' &&
    css`
      background-color: ${props.theme.colors['blue-primary']};
      color: #fff;

      &:hover {
        background-color: ${props.theme.colors['button-hover']};
      }

      &:active {
        background-color: ${props.theme.colors['button-active']};
      }
    `}

  //variant black
  ${(props) =>
    props.$variant === 'black' &&
    css`
      gap: 8px;

      background-color: ${props.theme.colors['base-title']};
      color: ${props.theme.colors['base-text-hover']};
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 162%;

      img {
        width: 20px;
        height: 20px;
      }

      &:hover {
        background-color: ${props.theme.colors['base-subtitle']};
      }

      &:active {
        background-color: ${props.theme.colors['base-subtext']};
      }
    `}

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;

  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${(props) => props.theme.colors['base-hover']};
  }
`;

export const FooterLink = styled.div`
  margin-top: 1rem;
  margin: 24px auto;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 140%;

  a {
    color: #007aff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
