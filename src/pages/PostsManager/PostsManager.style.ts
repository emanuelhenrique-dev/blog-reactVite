import styled from 'styled-components';
import dotCircle from '/src/assets/DotsThreeCircle.png';
import xCircle from '/src/assets/XCircle2.png';

export const PostManagerContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 30px 20px;

  .Posts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 18px;

    > h3 {
      font-family: 'Noto Sans';
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 140%;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(239, 248, 255, 0.8);
  z-index: 80;
  border-radius: 8.69px;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostCardContainer = styled.div`
  width: 100%;
  max-width: 960px;
  position: relative;
  display: flex;

  .trigger-overlay {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 99;
    cursor: pointer;

    background-image: url(${dotCircle});
    background-size: cover;

    &:hover {
      filter: brightness(1.4);
    }
  }

  &.active {
    .trigger-overlay {
      background-image: url(${xCircle});
    }

    ${Overlay} {
      opacity: 1;
      pointer-events: auto;
    }

    @media (max-width: 700px) {
      ${Overlay} div {
        flex-direction: column;
      }
    }
  }
`;

export const FeaturedPostModifier = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-size: 16px;
    line-height: 28px;
    color: ${(props) => props.theme.colors['blue-primary']};

    background-color: transparent;

    svg {
      z-index: 20;
    }
  }

  &:hover {
    filter: brightness(1.3);
  }
`;

export const OverlayFeaturedPost = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000b9;
  z-index: 1001;

  color: white;

  display: flex;
  justify-content: center;
  overflow-y: scroll;

  .modal {
    position: relative;
    margin-block: 100px 50px;
    padding: 30px;
    height: fit-content;
    background-color: ${(props) => props.theme.colors['base-input']};
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.75rem;
      color: ${(props) => props.theme.colors['base-title']};

      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }

  .select-post {
    width: 100%;
    max-width: 960px;
    z-index: 100;
  }

  .close-button {
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
    color: ${(props) => props.theme.colors['blue-primary']};
  }
`;
