//assets
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

//components
import { PostCard } from '../../../components/PostCard/PostCard';

// styles
import {
  FilterContainer,
  ListContainer,
  PostListContainer,
  PostsListHeading
} from './PostList.style';
import type { Post } from '../../../reducers/posts/reducer';

interface PostList {
  posts: Post[];
}

export function PostList({ posts }: PostList) {
  return (
    <PostListContainer>
      <PostsListHeading>
        <h2>Todas as postagens</h2>
      </PostsListHeading>
      <FilterContainer>
        <div id="tags-filter">
          <button className="selected" value="todas">
            Todas
          </button>
          <button value="design">Design</button>
          <button value="tecnologia">Tecnologia</button>
          <button value="design">Programação</button>
          <button id="special-concursos" value="ti-concursos">
            Ti Concursos
          </button>
        </div>

        <div className="search">
          <input type="search" placeholder="Procurar" name="procura" />
          <MagnifyingGlassIcon size={16} />
        </div>
      </FilterContainer>

      <ListContainer>
        {posts.map((post) => (
          <PostCard
            title={post.title}
            subtitle={post.subtitle}
            tag={post.tag}
            author={post.author}
            date={post.dateCreated}
            image={
              post.contentJSON.blocks.find((block) => block.type === 'image')
                ?.data.file?.url
            }
            link={`/post/${post.id}`}
          />
        ))}
      </ListContainer>
    </PostListContainer>
  );
}
