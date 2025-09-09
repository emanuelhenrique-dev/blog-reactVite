//rrd imports
import { useLoaderData, useNavigate } from 'react-router-dom';
//components
import { PostCard } from '../../components/PostCard/PostCard';
import { PageHeader } from './components/PageHeader/PageHeader';
import { ButtonsAction } from './components/ButtonsAction/ButtonsAction';
//styles
import {
  Overlay,
  PostCardContainer,
  PostManagerContainer
} from './PostsManager.style';
import { ListContainer } from '../Home/PostList/PostList.style';
//react imports
import { useRef } from 'react';
//assets
import { posts } from '../../data/posts';

export async function PostsManagerLoader() {
  const user = localStorage.getItem('adminUser');
  return user ? JSON.parse(user) : null;
}

export interface AdminUser {
  username: string;
  password: string;
  name: string;
}

export function PostsManager() {
  const { name } = useLoaderData() as AdminUser;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('isLoggedInAdmin');
    localStorage.removeItem('adminUser');
    navigate('/dashboard2490admin');
  }

  function handleCreatePost() {
    // aqui você pode redirecionar para uma página de criação de post
    alert('Funcionalidade de criar post ainda não implementada 🚧');
  }

  function toggleOverlayActive(index: number) {
    const card = cardRefs.current[index];
    if (card) {
      card.classList.toggle('active');
    }
  }
  return (
    <PostManagerContainer>
      <PageHeader
        title="Gerenciamento dos Posts"
        onLogout={handleLogout}
        action="Gerenciando os posts como"
        username={name}
        primaryAction={{ label: 'Criar Post', onClick: handleCreatePost }}
      />
      <div className="Posts">
        <h3>Posts Atuais</h3>
        <ListContainer>
          {posts.map((post, index) => (
            <PostCardContainer
              key={post.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <Overlay>
                <ButtonsAction
                  primaryAction={{
                    label: 'Criar Post',
                    onClick: handleCreatePost
                  }}
                  secondaryAction={{
                    label: 'Deletar Post',
                    onClick: handleCreatePost
                  }}
                />
              </Overlay>
              <div
                className="trigger-overlay"
                onClick={() => toggleOverlayActive(index)}
              ></div>
              <PostCard
                title={post.title}
                subtitle={post.subtitle}
                tag={post.tag}
                author={post.author}
                date={post.dateCreated}
                image={
                  post.contentJSON.blocks.find(
                    (block) => block.type === 'image'
                  )?.data.file?.url
                }
                link={`/dashboard2490admin/posts-manager/${post.id}`}
              />
            </PostCardContainer>
          ))}
        </ListContainer>
      </div>
    </PostManagerContainer>
  );
}
