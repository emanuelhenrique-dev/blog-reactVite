import styled from 'styled-components';
import { Tag } from '../../pages/Home/home.style';

export const PostContainer = styled.article`
  width: 100%;
`;

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;

  .heading {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: 'Noto Sans';

    h1 {
      font-size: 2.25rem;
      font-weight: 600;
      line-height: 110%;
      color: ${(props) => props.theme.colors['base-title']};
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 140%;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }

  .author-name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 100%;
    color: ${(props) => props.theme.colors['base-subtext']};

    .author-avatar {
      width: 26px;
      height: 26px;
      margin-bottom: 2px;
    }

    .divider {
      /* width: 10px;
      height: 0px;

      border: 1px solid #999999;
      transform: rotate(90deg); */
      content: '';
      width: 1px;
      height: 10px;

      background-color: #999999;
    }
  }

  @media (max-width: 620px) {
    .heading {
      text-align: center;

      h1 {
        font-size: 2rem;
      }
    }
  }
`;

export const TagPost = styled(Tag)`
  width: fit-content;
  padding: 9px 13.5px;
  margin-bottom: 5px;

  font-family: 'Source Serif 4';
  font-size: 14px;
  line-height: 110%;
`;

export const PostContent = styled.section`
  font-family: 'Noto Sans';

  // p
  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 2rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-block-end: 25px;
  }

  // h1, h2, h3, h4, h5, h6
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: ${(props) => props.theme.colors['base-title']};
    margin-block-end: 16px;
  }

  h1 {
    font-size: 2.25rem; /* 36px */
    line-height: 2.5rem; /* 40px */
  }

  h2 {
    font-size: 1.5rem; /* 24px */
    line-height: 1.75rem; /* 28px */
  }

  h3 {
    font-size: 1.25rem; /* 20px */
    line-height: 1.5rem; /* 24px */
  }

  h4 {
    font-size: 1.125rem; /* 18px */
    line-height: 1.5rem; /* 24px */
  }

  h5 {
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }

  h6 {
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
  }

  //figure or image

  figure {
    text-align: center;
    /* margin: 1rem 0; */
    margin-block-end: 32px;

    img {
      border-radius: 8.93757px;
      max-width: 600px;
    }
  }

  figure.image-border img {
    border: 2px solid ${(props) => props.theme.colors['blue-primary']};
  }

  figure.image-stretched img {
    max-width: 100%;
  }

  // blockquote
  blockquote {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    margin-block-end: 32px;
    padding: 32px;

    background: ${(props) => props.theme.colors['base-input']};
    border-left: 4px solid ${(props) => props.theme.colors['base-hover']};
    border-radius: 12px;

    font-family: 'Source Serif 4';
    font-style: italic;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${(props) => props.theme.colors['base-subtitle']};

    footer {
      display: flex;
      justify-content: flex-end;
      font-style: normal;
      font-size: 1.3125rem;
      color: ${(props) => props.theme.colors['base-subtext']};
    }
  }

  @media (max-width: 620px) {
    // p
    p {
      font-size: 1.08rem;
      line-height: 1.8rem;
    }

    // image
    figure {
      img {
        width: 100%;
      }
    }

    // blockquote
    blockquote {
      font-size: 1.08rem;
      line-height: 1.8rem;
      padding: 24px;
    }
  }
`;
