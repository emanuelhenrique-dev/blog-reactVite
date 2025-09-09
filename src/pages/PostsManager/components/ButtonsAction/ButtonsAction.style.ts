import styled from 'styled-components';

export const ButtonsActionContainer = styled.div`
  display: flex;
  gap: 12px;

  button {
    width: 100vw;
    max-width: 195px;
    padding: 15px 50px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors['blue-primary']};

    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: ${(props) => props.theme.colors['white']};

    &:hover {
      background-color: ${(props) => props.theme.colors['button-hover']};
    }

    &:active {
      background-color: ${(props) => props.theme.colors['button-active']};
    }
  }

  button:nth-child(2) {
    background-color: #b92930;
    &:hover {
      background-color: #a42128;
    }

    &:active {
      background-color: #c2383b;
    }
  }
`;
