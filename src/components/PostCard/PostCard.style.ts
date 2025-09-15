import styled from 'styled-components';
import type { TagProps } from '../../pages/Home/home.style';
import { Link as onLink } from 'react-router-dom';

export const PostCardContainer = styled(onLink)`
  position: relative;
  width: 100%;
  max-width: 960px;
  display: flex;
  gap: 12px;

  background-color: ${(props) => props.theme.colors.background};
  border: 0.724149px solid rgba(102, 112, 133, 0.2);
  box-shadow: 5px 4px 4px ${(props) => props.theme.colors['box-shadow']};
  border-radius: 8.68978px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors['blue-secondary']};
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.35);

    h3 {
      color: ${(props) => props.theme.colors['blue-primary']};
      filter: brightness(1.2);
    }

    img[alt='Post Thumbnail'] {
      transform: scale(1.1);
    }

    > div:nth-child(1) {
      //ImageWrapper
      box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.35);
    }
  }

  > svg {
    position: absolute;
    bottom: 6px;
    right: 6px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    padding: 4px 12px;

    p {
      line-height: 22px !important;
    }
  }
`;

export const ImageWrapper = styled.div<TagProps>`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  width: 309px;
  height: 176px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.3s ease;

  img {
    object-fit: cover;
    display: block;

    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }

  span {
    position: absolute;
    bottom: 6px;
    left: 6px;
    padding: 2px 10px;

    font-weight: 500;
    font-size: 1rem;
    line-height: 140%;
    font-family: 'Source Serif 4', sans-serif;
    color: ${(props) => props.theme.colors.white};

    background-color: ${({ $category, theme }) =>
      $category === 'Tecnologia'
        ? theme.colors['tag-blue']
        : $category === 'Design'
        ? theme.colors['tag-pink']
        : theme.colors['tag-green']};
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 6px;

  .author-date {
    width: 100%;
    height: 18px;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: flex-start;

    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-subtext']};

    padding-bottom: 4px;
    border-bottom: 1px solid
      ${(props) => props.theme.colors['border-card-color']};

    img {
      width: 16px;
      height: 16px;
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
  h3 {
    font-family: 'Noto Sans';
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 20px;
    color: ${(props) => props.theme.colors['base-title']};
    text-align: left;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* número de linhas */
    -webkit-box-orient: vertical;
    padding-bottom: 2px;
  }

  p {
    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 1rem;
    line-height: 34px;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`;
