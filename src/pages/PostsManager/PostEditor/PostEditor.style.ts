import styled from 'styled-components';
import { TagPost } from '../../../components/Post/Post.style';

export const PostEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 30px 20px;
  }
`;

export const PostEditorContent = styled.div`
  .select-option {
    display: flex;
    gap: 20px;
    border-bottom: 10px solid ${(props) => props.theme.colors['blue-primary']};
    margin-bottom: 24px;
    h2 {
      font-family: 'Noto Sans';
      font-weight: 600;
      font-size: 2rem;
      line-height: 120%;

      cursor: pointer;
      user-select: none;
      padding: 6px 8px;
      transition: 0.3s ease-in;
      border-radius: 10px 10px 0 0;

      &:hover {
        background-color: ${(props) => props.theme.colors['blue-secondary']};
      }

      &.active {
        color: ${(props) => props.theme.colors['white']};
        background-color: ${(props) => props.theme.colors['blue-primary']};
      }
    }
  }
`;

export const PostEditorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16;
`;

export const FormHeader = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 32px;

  .header-inputs {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 12px;
  }

  .title-input {
    position: relative;
    border: 1px dashed #2980b9;
    border-radius: 5px;

    background-color: ${(props) => props.theme.colors['base-input']};

    textarea {
      width: 100%;
      height: 100%;

      font-size: 2.25rem;
      font-weight: 600;
      line-height: 110%;
      color: ${(props) => props.theme.colors['base-title']};

      outline: none;
      border: none;
      background-color: transparent;

      resize: none;
      overflow: hidden;
    }

    span {
      position: absolute;
      bottom: 7px;
      right: 7px;
      background-color: #b92929ff;
      color: ${(props) => props.theme.colors['white']};
      padding: 2px 6px;
      border-radius: 5px;
      opacity: 0.8;
    }
  }

  .subtitle-input {
    position: relative;
    border: 1px dashed #2980b9;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors['base-input']};

    textarea {
      width: 100%;
      height: 100%;

      font-size: 1rem;
      font-weight: 400;
      line-height: 140%;
      color: ${(props) => props.theme.colors['base-subtitle']};

      outline: none;
      border: none;
      background-color: transparent;

      resize: none;
      overflow: hidden;
    }

    span {
      font-size: 0.8rem;
      position: absolute;
      bottom: 3px;
      right: 7px;
      background-color: #b92929ff;
      color: ${(props) => props.theme.colors['white']};
      padding: 2px 6px;
      border-radius: 5px;
      opacity: 0.8;
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
    .header-inputs {
      textarea {
        text-align: center;
      }

      .title-input input {
        font-size: 2rem;
      }
    }
  }
`;

export const TagInput = styled(TagPost)`
  padding: 0;

  border: 1px dashed;
  select {
    padding: 9px 13.5px;
    width: 100%;
    background-color: transparent;
    border: none;
    border-radius: 12px;
    outline: none;

    border: 1px dashed
      ${({ $category, theme }) =>
        $category === 'Tecnologia'
          ? theme.colors['tag-blue2']
          : $category === 'Design'
          ? theme.colors['tag-pink2']
          : $category === 'Programação'
          ? theme.colors['tag-green2']
          : theme.colors['tag-purple2']};

    color: ${({ $category, theme }) =>
      $category === 'Tecnologia'
        ? theme.colors['tag-blue']
        : $category === 'Design'
        ? theme.colors['tag-pink']
        : $category === 'Programação'
        ? theme.colors['tag-green']
        : theme.colors['tag-purple']};
  }
`;

export const PostEditorPreview = styled.div`
  .heading-preview {
    height: max-content;
    margin-bottom: 24px;
    border-bottom: 2px solid ${(props) => props.theme.colors['blue-primary']};
    /* h3 {
      display: inline;
      font-size: 28px;
      line-height: 140%;
      color: ${(props) => props.theme.colors['white']};

      background-color: ${(props) => props.theme.colors['blue-primary']};
      padding: 2px 6px;
    } */
  }
`;
