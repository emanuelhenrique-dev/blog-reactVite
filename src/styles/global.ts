import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
  --max-width: 1300px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-title']};
    -webkit-font-smoothing: antialiased;
  }

    body, input, textarea, button {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1rem;
    line-height: 140%;
    font-weight: 400;
   
  }

  a {
    text-decoration: none;
  }

    button {
    border: none;
    cursor: pointer;
  }
`;
