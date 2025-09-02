import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80px;

  background-color: ${(props) => props.theme.colors['blue-secondary']};
`;
