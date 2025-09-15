import styled from 'styled-components';

export const EditorContainer = styled.div`
  h1.ce-header {
    font-size: 2.25rem; /* 36px */
    line-height: 2.5rem; /* 40px */
  }

  h2.ce-header {
    font-size: 1.5rem; /* 24px */
    line-height: 1.75rem; /* 28px */
  }

  h3.ce-header {
    font-size: 1.25rem; /* 20px */
    line-height: 1.5rem; /* 24px */
  }

  h4.ce-header {
    font-size: 1.125rem; /* 18px */
    line-height: 1.5rem; /* 24px */
  }

  h5.ce-header {
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }

  h6.ce-header {
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
  }

  //cada bloco
  .ce-block__content {
    max-width: none;
  }
  // menuzinho flutuante
  .ce-toolbar__content {
    max-width: none;
  }

  // cor das bolinhas do menuzinho flutuante
  .ce-toolbar__plus,
  .ce-toolbar__settings-btn {
    color: ${(props) => props.theme.colors['base-title']};

    &:hover {
      background-color: ${(props) => props.theme.colors['base-hover']};
    }
  }

  // botoes do menuzinho flutuante mobile
  @media (max-width: 650px) {
    .ce-toolbar__plus,
    .ce-toolbar__settings-btn {
      background-color: ${(props) => props.theme.colors['background']};
      border: 1px solid ${(props) => props.theme.colors['base-hover']};
    }
  }

  //image
  .image-tool__image-picture {
    margin: 0 auto;
    max-width: 600px;
    border-radius: 8.93757px;
  }

  //border image
  .image-tool--withBorder .image-tool__image {
    border: none;

    .image-tool__image-picture {
      border: 2px solid ${(props) => props.theme.colors['blue-primary']};
    }
  }

  // stretched image
  .ce-block.ce-block--stretched .image-tool__image-picture {
    max-width: 100%;
  }

  // overlay dos blocos
  .ce-block--selected .ce-block__content {
    background-color: ${(props) => props.theme.colors['border-card-color']};
  }

  //paddind abaixo do editor
  .codex-editor__redactor {
    padding-bottom: 100px !important;
  }

  @media (min-width: 650px) and (max-width: 1320px) {
    padding-inline: 40px;
  }

  @media (max-width: 934px) {
    .image-tool__image-picture {
      max-width: 100%;
      max-height: none;
    }
  }
`;
