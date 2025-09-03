import styled from 'styled-components';

export const DashboardAdminContainer = styled.div`
  min-height: calc(100vh - 175px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors['blue-secondary']};
`;
