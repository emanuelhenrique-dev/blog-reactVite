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
