import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 30px 20px;

  h1 {
    font-family: 'Source Serif 4', serif;
    font-size: 3.25rem;
    font-weight: 500;
    line-height: 64px;
    text-align: left;
    max-width: 800px;

    color: ${(props) => props.theme.colors['base-title']};

    @media (max-width: 538px) {
      font-size: 2.375rem;
      line-height: 52px;
    }
  }
`;

export const FeaturedPosts = styled.section`
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

    img {
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
  category: 'Tecnologia' | 'Design' | 'Ti Concursos';
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

  background-color: ${({ category, theme }) =>
    category === 'Tecnologia'
      ? theme.colors['tag-blue2']
      : category === 'Design'
      ? theme.colors['tag-pink2']
      : theme.colors['tag-green2']};

  color: ${({ category, theme }) =>
    category === 'Tecnologia'
      ? theme.colors['tag-blue']
      : category === 'Design'
      ? theme.colors['tag-pink']
      : theme.colors['tag-green']};
`;

export const FeaturedMain = styled.div`
  display: flex;
  flex-direction: row-reverse;

  gap: 20px;

  &:hover {
    .image-wrapper img {
      /* transform: scale(1.1); zoom */
      box-shadow: 0px 4px 15px ${(props) => props.theme.colors['blue-primary']};
    }

    h3 {
      color: ${(props) => props.theme.colors['blue-primary']};
    }
  }

  img {
    width: 229.46px;
    height: 213.16px;
    border-radius: 5px;

    position: relative;
    z-index: 3;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
  }

  .image-wrapper {
    width: fit-content;
    height: fit-content;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: -14px;
      left: -14px;
      z-index: 1;
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
  gap: 18px;

  padding-left: 12px;
  border-left: 1px solid hsla(0, 0%, 77%, 0.72);

  img {
    width: 121px;
    height: 121px;
    border-radius: 10px;

    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }

  > div {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex: 1;

    &:hover {
      > img {
        /* transform: scale(1.1); zoom */
        box-shadow: 0px 4px 15px
          ${(props) => props.theme.colors['blue-primary']};
      }

      h3 {
        color: ${(props) => props.theme.colors['blue-primary']};
      }
    }

    > div {
      /*  PostInfo */
      gap: 4px;
      padding-inline: 6px;

      > span {
        margin-bottom: 4px;
      }

      h3 {
        font-size: 0.875rem;
      }

      p {
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 1058px) {
    flex-direction: row;
    justify-content: center;

    padding-left: 0;
    border-left: none;

    padding-top: 18px;
    border-top: 1px solid hsla(0, 0%, 77%, 0.72);
  }

  @media (max-width: 768px) {
    > div {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      img {
        width: 100%;
        max-width: 171.46px;
        height: auto;
        max-height: 143.16px;
      }

      > div {
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
`;

export const PostsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
`;
