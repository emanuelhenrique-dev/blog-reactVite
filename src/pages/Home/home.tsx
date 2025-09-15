// styles
import { Heading, HomeContainer, PostsListContainer } from './home.style';

//components

import { usePosts } from '../../contexts/PostsContext';
import { PostList } from './components/PostList/PostList';
import { FeaturedPosts } from './components/FeaturedPosts/FeaturedPosts';

export function Home() {
  const { posts, mainPosts } = usePosts();

  window.scrollTo(0, 0);
  return (
    <HomeContainer>
      <Heading>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h1>
      </Heading>
      <FeaturedPosts
        title={'Recomendado'}
        main={mainPosts.main}
        side1={mainPosts.side1}
        side2={mainPosts.side2}
        path="/post"
      />

      <PostsListContainer>
        <PostList posts={posts} />
      </PostsListContainer>
    </HomeContainer>
  );
}
