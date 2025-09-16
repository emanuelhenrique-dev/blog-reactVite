import { useSearchParams } from 'react-router-dom';
import { SearchPageContainer } from './SearchPage.style';
import { usePosts } from '../../contexts/PostsContext';
import { filterPosts } from '../../util/FilterPosts';
import { ListContainer } from '../Home/components/PostList/PostList.style';
import { PostCard } from '../../components/PostCard/PostCard';

export function SearchPage() {
  const { posts } = usePosts();
  const [params] = useSearchParams();
  const searchTerm = params.get('search_term') || '';

  const resultsPosts = filterPosts('todas', searchTerm, posts);
  return (
    <SearchPageContainer>
      <div className="heading">
        <h2>Resultados da Pesquisa para: {searchTerm}</h2>
      </div>
      {resultsPosts.length > 0 ? (
        <span>Encontramos {resultsPosts.length} resultados para sua busca</span>
      ) : (
        <span></span>
      )}
      <ListContainer>
        {resultsPosts.length > 0 ? (
          resultsPosts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              subtitle={post.subtitle}
              tag={post.tag}
              author={post.author}
              date={post.dateCreated}
              image={
                post.contentJSON?.blocks?.find(
                  (block) => block.type === 'image'
                )?.data.file?.url
              }
              link={`/post/${post.id}`}
            />
          ))
        ) : (
          <div style={{ height: '122px', paddingTop: '50px' }}>
            <h2>Nenhum post encontrado.</h2>
          </div>
        )}
      </ListContainer>
    </SearchPageContainer>
  );
}
