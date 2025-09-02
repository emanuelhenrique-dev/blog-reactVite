import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;

  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderContent = styled.div`
  max-width: var(--max-width);
  padding: 30px 20px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.colors['base-title']};
    font-size: 2rem;
    font-family: 'Source Serif 4', sans-serif;
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
      color: ${(props) => props.theme.colors['blue-primary']};
    }
  }

  @media (max-width: 538px) {
    padding: 30px 10px;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  gap: 12px;

  background-color: ${(props) => props.theme.colors['base-input']};
  border-radius: 5px;
  border: 1px solid transparent;

  input {
    width: 100%;
    border: none;
    background: transparent;
    outline: none;

    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-title']};
  }

  svg {
    flex-shrink: 0;
    cursor: pointer;
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors['blue-primary']};
  }

  @media (max-width: 538px) {
    max-width: 153px;
  }
`;

export const MobileOpenMenu = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px 4px;
  background-color: transparent;
  width: 32px;
  height: 32px;
  cursor: pointer;

  transition: transform 0.25s ease;

  span {
    width: 24px;
    height: 3px;
    background-color: #fff;
    transition: all 0.25s;
    border-radius: 2px;
    flex-shrink: 0;

    background-color: ${(props) => props.theme.colors['base-title']};
  }

  &.active {
    span {
      background-color: ${(props) => props.theme.colors['blue-primary']};
    }

    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }

  @media (max-width: 868px) {
    display: flex;
  }
`;

export const HeaderNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 16px;

    li {
      list-style: none;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: ${(props) => props.theme.colors['blue-primary']};
      }
    }

    #login {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;

      button {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 5px 12px;

        background-color: ${(props) => props.theme.colors['blue-primary']};
        color: ${(props) => props.theme.colors.white};
        font-weight: 400;

        border: 1px solid #eaeaea;
        border-radius: 100px;

        &:hover {
          filter: brightness(1.1);
        }
      }
    }
  }

  @media (max-width: 868px) {
    position: absolute;
    width: 100%;
    padding: 20px;
    top: 80%;
    left: 0;
    background-color: ${(props) => props.theme.colors['nav-color']};

    transform: scaleY(0); /* fecha o menu */
    transform-origin: top; /* anima a partir do topo */
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &.open {
      transform: scaleY(1); /* abre o menu */
      opacity: 1;
      pointer-events: auto;
    }

    ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 18px;

      #login {
        width: 100%;
        align-items: center;
        justify-content: center;

        padding-top: 16px;
      }
    }
  }
`;

export const Switch = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 47px;

  .slider {
    position: absolute;
    left: 0;
    height: 30px;
    width: 60px;
    border-radius: 30px;
    background-color: #090d1f;
    cursor: pointer;
    transition: 0.5s;
    z-index: 99;

    &::before {
      position: absolute;
      left: 5px;
      bottom: 5px;
      height: 20px;
      width: 20px;
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
        background-color: white;
      }
      & ~ .slider:before {
        background-color: white;
        box-shadow: inset -8px -6px 0 0px #090d1f;
        transform: translate(30px, 1px);
      }
      & ~ .slide-block {
        left: 0;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
`;
