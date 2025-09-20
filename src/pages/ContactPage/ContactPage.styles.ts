import styled from 'styled-components';
import { TextBox } from '../../components/Login/Login.style';

export const ContactPageContainer = styled.main`
  width: 100%;
  /* max-width: var(--max-width);
  margin: 0 auto;
  padding: 30px 20px; */

  display: flex;
  height: 100vh;
  max-height: calc(100vh - 175px);
  background-image: url(/job-5382501_1920.jpg);
  background-size: cover;

  @media (max-width: 840px) {
    height: fit-content;
    max-height: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;

  .Heading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);

    h2 {
      font-family: 'Source Serif 4';
      font-weight: 500;
      font-size: 3rem;
      line-height: 133%;
      color: ${(props) => props.theme.colors['white']};
    }
  }

  .main-content {
    height: 100%;
    flex: 1;
    background-color: ${(props) => props.theme.colors['background']};

    .wrapper {
      display: flex;
      max-width: var(--max-width);
      height: 100%;
      margin: 0 auto;
      padding: 30px 20px;

      .hero {
        position: relative;
        flex: 1;
        background-image: url(/call-center-7040784_1280.png);
        background-size: 400px;
        background-repeat: no-repeat;
        background-position: center;

        filter: drop-shadow(10px 26px 2px rgba(0, 0, 0, 0.25));

        > div {
          width: 100%;
          position: absolute;
          bottom: 12px;
          left: 50%;

          transform: translate(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          span {
            display: flex;
            align-items: center;
            gap: 5px;

            font-weight: 400;
            font-size: 1rem;
            line-height: 156%;
            color: ${(props) => props.theme.colors['blue-primary']};
          }
        }
      }

      .form-container {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (max-width: 840px) {
    & {
      .Heading {
        min-height: 150px;
      }

      .wrapper {
        flex-direction: column;
        gap: 50px;
        height: fit-content;
        padding: 30px;

        .hero {
          min-height: 300px;
          background-size: 300px !important;
          background-position: top !important;

          margin-bottom: 50px;

          > div {
            bottom: -24px !important;
          }
        }

        h3 {
          font-size: 2.3rem !important;
        }
      }
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  max-width: 400px;

  h3 {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 100%;
    text-align: center;
    color: ${(props) => props.theme.colors['blue-primary']};
    margin-bottom: 30px;
  }

  textarea {
    width: 100%;
    height: 100px;
    border: 2px solid ${(props) => props.theme.colors['blue-primary']}; //mudei
    border-radius: 8px;
    padding: 14px 16px;

    background: transparent; //mudei
    color: ${(props) => props.theme.colors['base-title']};
    resize: none;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors['blue-primary']};
    }
  }
`;

export const TextBoxContact = styled(TextBox)`
  input {
    border: 2px solid ${(props) => props.theme.colors['blue-primary']}; //mudei

    background: transparent; //mudei

    &:focus + label,
    &:not(:placeholder-shown) + label {
      background: ${(props) => props.theme.colors['background']}; //mudei
    }
  }
`;
