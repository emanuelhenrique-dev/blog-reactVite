import styled from 'styled-components';

export const AboutPageContainer = styled.main`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 30px 20px;

  height: calc(100vh - 175px);

  .back-button {
    margin-bottom: 12px;

    button {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-left: auto;

      font-family: 'Noto Sans';
      font-weight: 400;
      font-size: 1rem;
      line-height: 175%;
      color: ${(props) => props.theme.colors['base-subtitle']};

      background: transparent;

      &:hover {
        color: ${(props) => props.theme.colors['blue-primary']};
      }
    }
  }
`;

export const ContentContainer = styled.main`
  margin-bottom: 24px;
`;
