//rrr imports
import { useLoaderData, useNavigate } from 'react-router-dom';

//components
import { Post } from '../../components/Post/Post';
import { SharedLinks } from './components/SharedLinks/SharedLinks';
import { usePosts } from '../../contexts/PostsContext';

// styles
import {
  CommentsContainer,
  ContentContainer,
  ExplorePosts,
  PostPageContainer
} from './PostPage.style';
import type { Post as PostType } from '../../reducers/posts/reducer';

//assets
import { ArrowLeftIcon } from '@phosphor-icons/react';
import { PostCard } from '../../components/PostCard/PostCard';

export function PostPage() {
  const { post } = useLoaderData() as { post: PostType };
  const navigate = useNavigate();

  const { posts } = usePosts();

  window.scrollTo(0, 0);

  // pegar 3 posts aleatórios
  function getRandomPosts(posts: PostType[], count: number = 3) {
    // Filtra o post atual
    const filteredPosts = posts.filter((postF) => postF.id !== post.id);

    const shuffled = [...filteredPosts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomPosts = getRandomPosts(posts, 3);

  if (!post) {
    return (
      <PostPageContainer>
        <div className="back-button">
          <button onClick={() => navigate(-1)}>
            <ArrowLeftIcon width={22} />
            voltar
          </button>
        </div>

        <ContentContainer>
          <p>Post não encontrado</p>
        </ContentContainer>

        <ExplorePosts>
          <h3>Explorar mais conteúdos</h3>
          <div className="more-posts">
            {randomPosts.map((post) => {
              return (
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
                    )?.data?.file?.url
                  }
                  link={`/post/${post.id}`}
                />
              );
            })}
          </div>
        </ExplorePosts>

        <CommentsContainer>
          <div className="comments-header">
            <h3>COMENTÁRIOS</h3>
          </div>
        </CommentsContainer>
      </PostPageContainer>
    );
  }

  return (
    <PostPageContainer>
      <div className="back-button">
        <button onClick={() => navigate(-1)}>
          <ArrowLeftIcon width={22} />
          voltar
        </button>
      </div>

      <ContentContainer>
        <Post post={post} />
        <SharedLinks postUrl={window.location.href} title={post.title} />
      </ContentContainer>

      <ExplorePosts>
        <h3>Explorar mais conteúdos </h3>
        <div className="more-posts">
          {randomPosts.map((post) => {
            return (
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
                  )?.data?.file?.url
                }
                link={`/post/${post.id}`}
              />
            );
          })}
        </div>
      </ExplorePosts>

      <CommentsContainer>
        <div className="comments-header">
          <h3>COMENTÁRIOS</h3>
        </div>
      </CommentsContainer>
    </PostPageContainer>
  );
}
