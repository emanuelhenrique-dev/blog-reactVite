import styled from 'styled-components';

export const PostDashboardContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 30px 20px;
`;

export const PostContainer = styled.div`
  padding-top: 10px;
  border-top: 1px dashed ${(props) => props.theme.colors['blue-primary']};
`;
