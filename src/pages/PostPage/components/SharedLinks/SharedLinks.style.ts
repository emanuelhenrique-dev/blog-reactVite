import styled from 'styled-components';

export const SharedLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
  }

  .social-medias {
    display: flex;
    justify-content: space-between;

    > div[role='button'] {
      background-color: rgba(41, 127, 185, 0.15);
      border-radius: 50%;
      flex: 0;
      max-width: 40px;
      max-height: 40px;
      cursor: pointer;

      svg {
        margin: 8px;
        transition: 0.3s ease-in-out;
      }

      &:hover {
        svg {
          transform: scale(1.1);
        }

        svg path {
          stroke: ${(props) => props.theme.colors['base-title']};
        }
      }
    }
  }
`;
