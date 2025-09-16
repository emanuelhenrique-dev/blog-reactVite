//components
import { PostCard } from '../../../../components/PostCard/PostCard';
import { Filter } from '../../../../components/Filter/FIlter';

// styles
import {
  ListContainer,
  PostListContainer,
  PostsListHeading
} from './PostList.style';

import type { Post } from '../../../../reducers/posts/reducer';

import { useState } from 'react';

interface PostList {
  posts: Post[];
}

export function PostList({ posts }: PostList) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  return (
    <PostListContainer>
      <PostsListHeading>
        <h2>Todas as postagens</h2>
      </PostsListHeading>
      <Filter posts={posts} onFilter={setFilteredPosts} />
      <ListContainer>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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
    </PostListContainer>
  );
}
