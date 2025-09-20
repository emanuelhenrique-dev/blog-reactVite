import styled from 'styled-components';

export const AboutPageContainer = styled.main`
  height: calc(100vh - 175px);
  background-image: url(/job-5382501_1920.jpg);
  background-size: cover;

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
  /* width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 30px 20px; */
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors['white']};

  overflow: auto;

  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    justify-content: flex-start;
    > div {
      margin-block: 50px;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 937px;
  margin: 0 auto;

  border-radius: 12px;

  font-family: 'Source Serif 4';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;

  div {
    padding: 30px;
    background-color: ${(props) => props.theme.colors['blue-primary']};
    margin-inline: 50px;

    border-color: #1a3f57;
    border-style: solid;
    border-width: 0;
  }

  .divider {
    padding: 0;
    height: 8px;
    text-align: right;

    background: transparent;
    max-width: 100%;
    display: flex;
    margin-inline: 61px;

    span {
      display: block;
      background-color: ${(props) => props.theme.colors['blue-primary']};
      width: 80%;
      height: 100%;
      margin: 0 auto;

      filter: blur(2);
    }
  }

  .about-blog {
    position: relative;
    padding-left: 20%;
    text-align: left;

    border-width: 5px 5px 0 5px;
    border-radius: 15px;

    h2 {
      position: absolute;
      top: -50px;
      left: -50px;

      font-weight: 500;
      line-height: 64px;

      padding: 32px 16px;
      border-radius: 50%;
      background-color: #1a3f57;
      border: 5px solid ${(props) => props.theme.colors['blue-primary']};
    }
  }

  .about-author {
    position: relative;
    padding-right: 20%;
    text-align: left;
    border-width: 0px 5px 5px 5px;

    border-radius: 15px;

    &::after {
      content: '';
      position: absolute;
      bottom: -46px;
      right: -55px;

      background-image: url('/author-avatar.png');
      background-size: cover;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 8px solid ${(props) => props.theme.colors['blue-primary']};
    }

    .author-social {
      position: absolute;
      bottom: -25px;
      right: 34px;
      z-index: 100;

      display: flex;
      background-color: transparent;

      a {
        max-width: 40px;
        max-height: 40px;
        padding: 8px;

        svg path {
          stroke: white;
        }
      }

      a:last-child svg path {
        stroke: none;
        fill: white;
      }
    }
  }

  @media (max-width: 685px) {
    div {
      padding: 35px 20px;
      margin-inline: 50px;
      padding-bottom: 50px;
    }

    .about-blog {
      padding-left: 15%;

      h2 {
        top: -50px;
        left: -50px;

        font-weight: 500;
        font-size: 21px;
        line-height: 64px;

        padding: 28px 14px;
      }
    }

    .about-author {
      padding-right: 15%;

      &::after {
        bottom: -46px;
        right: -55px;

        width: 130px;
        height: 130px;
      }

      .author-social {
        bottom: -50px;
        right: 20px;
      }
    }
  }

  @media (max-width: 500px) {
    div {
      margin: 0 30px;
    }

    .about-blog {
      padding: 20px;
      padding-top: 75px;
      text-align: right;
      h2 {
        top: -50px;
        left: -34px;
      }
    }
    .about-author {
      padding-top: 60px;

      &::after {
        bottom: -46px;
        right: -31px;
      }

      .author-social {
        bottom: 0;
        top: 10px;
        right: 8px;
        flex-direction: column;
        padding: 0;
        margin: 0;

        gap: 5px;

        a {
          display: block;
          width: fit-content;
          max-height: 24px;
          padding: 0;
        }
      }
    }
  }
`;
