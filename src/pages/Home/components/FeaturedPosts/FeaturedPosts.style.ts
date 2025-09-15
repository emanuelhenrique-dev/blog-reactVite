import styled from 'styled-components';

export const FeaturedPostsContainer = styled.section`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors['blue-secondary']};

  h2 {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 30px 20px 0 20px;
  }
`;

export const PostsWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px;

  @media (max-width: 1058px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  .post-modifier {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  h3 {
    font-family: 'Noto Sans';
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 140%;
    cursor: pointer;
  }

  .author-date {
    display: flex;
    gap: 5px;
    align-items: center;

    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 140%;
    color: ${(props) => props.theme.colors['base-subtext']};

    img[alt='imagem avatar'] {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    span:nth-child(3) {
      width: 1px;
      height: 8px;
      background-color: ${(props) => props.theme.colors['base-subtext']};
    }

    span:nth-child(4) {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  p {
    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 1rem;
    line-height: 140%;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  button {
    display: flex;
    align-items: center;
    padding: 6px 8px;
    gap: 5px;
    background-color: transparent;

    color: ${(props) => props.theme.colors['blue-primary']};

    font-family: 'Noto Sans';
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 140%;
  }
`;

export interface TagProps {
  $category: 'Tecnologia' | 'Design' | 'Ti Concursos' | 'Programação';
}

export const Tag = styled.span<TagProps>`
  display: block;
  padding: 2px 8px;
  color: ${(props) => props.theme.colors['blue-primary']};
  background-color: #d3edff;
  border-radius: 12px;

  font-family: 'Source Serif 4', sans-serif;
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 140%;

  background-color: ${({ $category, theme }) =>
    $category === 'Tecnologia'
      ? theme.colors['tag-blue2']
      : $category === 'Design'
      ? theme.colors['tag-pink2']
      : theme.colors['tag-green2']};

  color: ${({ $category, theme }) =>
    $category === 'Tecnologia'
      ? theme.colors['tag-blue']
      : $category === 'Design'
      ? theme.colors['tag-pink']
      : theme.colors['tag-green']};
`;

export const FeaturedMain = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  cursor: pointer;
  flex: 2;

  &:hover {
    .image-wrapper img {
      transform: scale(1.1);
      box-shadow: 0px 4px 15px ${(props) => props.theme.colors['blue-primary']};
    }

    h3 {
      color: ${(props) => props.theme.colors['blue-primary']};
    }
  }

  .image-wrapper {
    width: 266.46px;
    height: 225.16px;

    position: relative;
    margin-left: 18px;

    background-size: cover;
    background-position: center;
    z-index: 1;

    .image-limit {
      width: 266.46px;
      height: 225.16px;
      overflow: hidden;
      border-radius: 5px;
      border: 5px solid ${(props) => props.theme.colors['blue-primary']};
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        vertical-align: middle;

        position: relative;
        z-index: 0;
        transition: box-shadow 0.3s ease;
        cursor: pointer;
        opacity: 1;

        transition: all 0.3s ease;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: -18px;
      left: -18px;
      z-index: -1;
      width: 119.99px;
      height: 166.95px;
      background-color: ${(props) => props.theme.colors['blue-primary']};
      border-radius: 5px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .image-wrapper {
      margin-top: 14px;
    }
  }
`;

export const FeaturedAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  flex: 1.5;

  padding-left: 12px;
  border-left: 1px solid hsla(0, 0%, 77%, 0.72);

  .image-wrapper {
    position: relative;
    width: 200%;
    max-width: 154px;
    height: 121px;
    overflow: hidden;
    border-radius: 10px;
    border: 3px solid ${(props) => props.theme.colors['blue-primary']};

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;

      cursor: pointer;
      transition: all 0.3s ease;
    }
  }

  .card-post {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex: 1;
    cursor: pointer;

    &:hover {
      .image-wrapper img {
        transform: scale(1.1);
      }

      h3 {
        color: ${(props) => props.theme.colors['blue-primary']};
      }
    }

    ${PostInfo} {
      /*  PostInfo */
      gap: 4px;
      padding-inline: 6px;

      > span {
        margin-bottom: 4px;
      }

      h3 {
        font-size: 0.875rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* número de linhas */
        -webkit-box-orient: vertical;
        padding-bottom: 1px;
      }

      p {
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 1058px) {
    flex-direction: row;
    justify-content: center;
    gap: 8px;

    padding-left: 0;
    border-left: none;

    padding-top: 18px;
    border-top: 1px solid hsla(0, 0%, 77%, 0.72);
  }

  @media (max-width: 768px) {
    .card-post {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      .image-wrapper {
        width: 100%;
        max-width: 171.46px;
        max-height: 143.16px;
      }

      ${PostInfo} {
        /*  PostInfo */
        padding: 5px 0;

        .author-date {
          span {
            font-size: 0.5rem;
          }
        }
      }
    }
  }

  @media (max-width: 358px) {
    ${PostInfo} {
      .author-date {
        gap: 2px;
        span {
          font-size: 0.4375rem !important;
        }

        span:nth-child(4) {
          gap: 2px;
        }
      }
    }
  }
`;
