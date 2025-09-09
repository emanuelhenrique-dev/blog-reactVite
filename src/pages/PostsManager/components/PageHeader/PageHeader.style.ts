import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-bottom: 16px;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  border-bottom: 2px solid ${(props) => props.theme.colors['blue-primary']};

  h2 {
    font-family: 'Noto Sans';
    font-weight: 600;
    font-size: 1.3125rem;
    line-height: 25px;
    color: ${(props) => props.theme.colors['white']};

    background-color: ${(props) => props.theme.colors['blue-primary']};
    padding: 2px 6px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* número de linhas */
    -webkit-box-orient: vertical;
  }

  button {
    display: flex;
    align-items: center;
    gap: 12px;

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

  @media (max-width: 700px) {
    h2 {
      font-size: 1.125rem;
    }
  }
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ActionsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${Dates} {
      p {
        font-weight: 400;
        font-size: 0.875rem;
      }
    }

    p {
      font-family: 'Noto Sans';
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.02em;
      color: ${(props) => props.theme.colors['base-title']};

      span {
        color: ${(props) => props.theme.colors['blue-primary']};
      }
    }
  }

  @media (max-width: 678px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;

    & > div:last-child {
      align-items: center;
    }
  }
`;
