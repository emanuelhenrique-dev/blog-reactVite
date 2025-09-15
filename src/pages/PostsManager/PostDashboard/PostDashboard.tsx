import { useLoaderData, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { PostContainer, PostDashboardContainer } from './PostDashboard.style';
import { Post } from '../../../components/Post/Post';
import type { Post as PostType } from '../../../reducers/posts/reducer';
import { usePosts } from '../../../contexts/PostsContext';

export async function PostDashboardLoader() {
  const user = localStorage.getItem('adminUser');
  return user ? JSON.parse(user) : null;
}

export function PostDashboard() {
  const navigate = useNavigate();

  const { post, user } = useLoaderData() as {
    post: PostType;
    user: { name: string; avatarImg: string };
  };

  const { removePost } = usePosts();

  window.scrollTo(0, 0);

  return (
    <PostDashboardContainer>
      <PageHeader
        title={`Gerenciamento do Post ${post.id}`}
        onBack={() => navigate('/dashboard2490admin/posts-manager')}
        action="Gerenciando o post como"
        createdAt={post.dateCreated}
        updatedAt={post.dateUpdated}
        lastUpdateAuthor={post.lastUpdateAuthor}
        username={user.name}
        primaryAction={{
          label: 'Editar Post',
          onClick: () =>
            navigate(`/dashboard2490admin/posts-manager/${post.id}/edit_post`)
        }}
        secondaryAction={{
          label: 'Deletar Post',
          onClick: () => {
            removePost(post.id);
            navigate('/dashboard2490admin/posts-manager');
          }
        }}
      />
      <PostContainer>
        <Post
          post={{
            ...post,
            tag: post.tag as 'Tecnologia' | 'Design' | 'Ti Concursos'
          }}
        />
      </PostContainer>
    </PostDashboardContainer>
  );
}
