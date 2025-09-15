import styled from 'styled-components';

export const ErrorPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 175px);

  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;

  .container {
    position: relative;
    background-color: ${(props) => props.theme.colors['blue-secondary']};
    width: min(100%, 600px);
    height: min(100%, 500px);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    h2,
    p {
      position: relative;
      z-index: 20;
    }

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: -81px;
      width: 200px;
      height: 200px;
      background-color: ${(props) => props.theme.colors['blue-primary']};
    }

    .box {
      position: absolute;
      bottom: -35px;
      right: -82px;
      width: 340px;
      height: 300px;
      background-color: ${(props) => props.theme.colors['blue-primary']};

      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: '';
        position: absolute;
        top: -115px;
        right: 28px;
        width: 287px;
        height: 114px;
        background-color: ${(props) => props.theme.colors['background']};
        border: 1px solid ${(props) => props.theme.colors['blue-primary']};
      }

      svg {
        position: absolute;
        top: -100px;
        left: 112px;
        width: 100px;
        height: 100px;
        color: ${(props) => props.theme.colors['base-title']};
      }
    }
  }

  @media (max-width: 650px) {
    .container {
      overflow: hidden;
      &::before {
        top: -61px;
        left: -65px;
      }

      .box {
        bottom: -67px;
        right: -190px;

        svg {
          left: 83px;
        }
      }
    }
  }
`;
