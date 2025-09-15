import styled from 'styled-components';
import {
  CardInfo,
  PostCardContainer
} from '../../components/PostCard/PostCard.style';

export const PostPageContainer = styled.main`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 30px 20px;

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
  display: flex;
  flex-direction: column;
  gap: 33px;
  align-items: center;

  margin-bottom: 24px;
`;

export const ExplorePosts = styled.div`
  margin-bottom: 24px;
  h3 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 140%;
    margin-bottom: 18px;
  }

  .more-posts {
    display: flex;
    gap: 30px;
    justify-content: center;

    ${PostCardContainer} {
      flex-direction: column;
      align-items: center;
      max-width: 309px;
      height: 340px;

      .image-wrapper {
        width: 100%;
      }

      svg {
        display: none;
      }

      ${CardInfo} {
        justify-content: center;
        h3 {
          -webkit-line-clamp: 3;
          text-align: center;
          width: 100%;
        }
        p {
          display: none;
        }
      }
    }
  }

  @media (max-width: 1045px) {
    .more-posts {
      gap: 0;
      justify-content: space-between;
    }
  }

  @media (max-width: 1000px) {
    .more-posts {
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      justify-content: center;
    }
  }
`;

export const CommentsContainer = styled.div`
  .comments-header {
    border-bottom: 2px solid #2980b9;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;

    h3 {
      display: inline;
      font-weight: 600;
      font-size: 1.3125rem;
      line-height: 117%;
      color: ${(props) => props.theme.colors['white']};

      background-color: ${(props) => props.theme.colors['blue-primary']};
      padding: 2px 28px;
      text-align: center;
    }
  }
`;
