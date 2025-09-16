import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;

  #tags-filter {
    display: flex;
    gap: 8px;
    overflow-x: auto;

    button {
      flex-shrink: 0;
      padding: 12px 24px;
      border-radius: 5px;
      border: 1px solid #bac2d6;

      font-family: 'Noto Sans';
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 140%;
      color: ${(props) => props.theme.colors['base-title']};
      background-color: ${(props) => props.theme.colors.background};

      &:hover {
        color: ${(props) => props.theme.colors.white};
        background-color: rgba(41, 128, 185, 0.64);
      }

      &.selected {
        color: ${(props) => props.theme.colors['base-text-hover']} !important;
        background-color: ${(props) => props.theme.colors['blue-primary']};
      }
    }

    #special-concursos {
      color: ${(props) => props.theme.colors['blue-primary']};
      border: 1px solid ${(props) => props.theme.colors['blue-primary']};
    }
  }

  .search {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 12px;
    max-width: 200px;

    background-color: ${(props) => props.theme.colors['base-input']};
    border-radius: 38px;
    border: 1px solid transparent;

    input {
      width: 100%;
      border: none;
      background: transparent;
      outline: none;
      flex: 1;

      font-family: 'Noto Sans';
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme.colors['base-title']};
    }

    svg {
      flex-shrink: 0;
      color: ${(props) => props.theme.colors['base-title']};
    }

    &:focus-within {
      border: 1px solid ${(props) => props.theme.colors['blue-primary']};
    }
  }

  @media (max-width: 956px) {
    flex-direction: column;
    gap: 14px;

    #tags-filter {
      padding: 8px;
      button {
        padding: 10px 18px;
      }
    }
  }
`;
