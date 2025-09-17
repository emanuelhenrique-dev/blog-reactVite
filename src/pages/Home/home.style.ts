import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 30px 20px;

  h1 {
    font-family: 'Source Serif 4', serif;
    font-size: 3.25rem;
    font-weight: 500;
    line-height: 64px;
    text-align: left;
    max-width: 800px;

    color: ${(props) => props.theme.colors['base-title']};

    @media (max-width: 538px) {
      font-size: 2.375rem;
      line-height: 52px;
    }
  }
`;

export interface TagProps {
  $category: 'Tecnologia' | 'Design' | 'Ti Concursos' | 'Programação';
}

export const Tag = styled.span<TagProps>`
  display: block;
  padding: 2px 8px;
  color: ${(props) => props.theme.colors['blue-primary']};
  background-color: #d3edff;
  border-radius: 12px;

  font-family: 'Source Serif 4', sans-serif;
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 140%;

  background-color: ${({ $category, theme }) =>
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
`;

export const PostsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
`;
