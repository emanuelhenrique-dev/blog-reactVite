import styled from 'styled-components';

export const SearchPageContainer = styled.main`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 30px 20px;

  min-height: calc(100vh - 175px);

  .heading {
    border-bottom: 2px solid ${(props) => props.theme.colors['blue-primary']};
    margin-bottom: 12px;
    h2 {
      display: inline;
      font-weight: 600;
      font-size: 1.3125rem;
      line-height: 130%;
      color: ${(props) => props.theme.colors['white']};

      background-color: ${(props) => props.theme.colors['blue-primary']};
      padding: 2px 6px;
    }
  }

  > span {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: ${(props) => props.theme.colors['base-subtitle']};

    display: inline-block;
    margin-bottom: 15px;
  }

  @media (max-width: 650px) {
    text-align: center;
  }
`;
