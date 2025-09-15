//rrd imports
import { useLoaderData, useNavigate } from 'react-router-dom';
//components
import { PostCard } from '../../components/PostCard/PostCard';
import { PageHeader } from './components/PageHeader/PageHeader';
import { ButtonsAction } from './components/ButtonsAction/ButtonsAction';
//styles
import {
  FeaturedPostModifier,
  Overlay,
  OverlayFeaturedPost,
  PostCardContainer,
  PostManagerContainer
} from './PostsManager.style';

//react imports
import { useRef, useState } from 'react';
//assets
import { usePosts } from '../../contexts/PostsContext';
import type { OutputBlockData } from '@editorjs/editorjs';
import { ListContainer } from '../Home/components/PostList/PostList.style';
import { FeaturedPosts } from '../Home/components/FeaturedPosts/FeaturedPosts';
import { GearIcon, XIcon } from '@phosphor-icons/react';
import type { MainPosts, Post } from '../../reducers/posts/reducer';

export async function PostsManagerLoader() {
  const user = localStorage.getItem('adminUser');
  return user ? JSON.parse(user) : null;
}

export interface AdminUser {
  username: string;
  password: string;
  name: string;
}

interface OverlayFeaturedPostsState {
  open: boolean;
  slot: SlotKey | null;
}

export type SlotKey = keyof MainPosts;
// "main" | "side1" | "side2"

export function PostsManager() {
  const { name } = useLoaderData() as AdminUser;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [overlayState, setOverlayState] = useState<OverlayFeaturedPostsState>({
    open: false,
    slot: null
  });
  const navigate = useNavigate();

  const { posts, mainPosts, updateMainPost, removePost } = usePosts();

  function handleLogout() {
    localStorage.removeItem('isLoggedInAdmin');
    localStorage.removeItem('adminUser');
    navigate('/dashboard2490admin');
  }

  window.scrollTo(0, 0);

  // Responsável por abrir o overlay para mudar os featuredPosts
  function handleOpenOverlay(slot: SlotKey) {
    document.body.style.overflow = 'hidden';
    setOverlayState({ open: true, slot });
  }
  // Responsável por fechar o overlay para mudar os featuredPosts
  const handleCloseOverlay = () => {
    document.body.style.overflow = '';
    setOverlayState({ open: false, slot: null });
  };

  function toggleCardOverlayActive(index: number) {
    const card = cardRefs.current[index];
    if (card) {
      card.classList.toggle('active');
    }
  }

  function handleChangeFeaturedPosts(postId: Post['id'], slot: SlotKey) {
    if (overlayState.slot) {
      console.log('mudei o post');
      updateMainPost(postId, slot);
      handleCloseOverlay();
    }
  }

  return (
    <PostManagerContainer className={!overlayState.open ? '' : 'overlay-open'}>
      <PageHeader
        title="Gerenciamento dos Posts"
        onLogout={handleLogout}
        action="Gerenciando os posts como"
        username={name}
        primaryAction={{
          label: 'Criar Post',
          onClick: () => navigate('/dashboard2490admin/posts-manager/new_post')
        }}
      />

      {/* Editar o FeaturedPosts */}
      {overlayState.open && (
        <OverlayFeaturedPost>
          <div className="modal">
            <h2>Mudar o post recomendado {overlayState.slot}</h2>
            <XIcon
              className="close-button"
              size={40}
              weight="fill"
              onClick={handleCloseOverlay}
            />
            {/* Aqui você lista todos os posts para escolher para o FeaturedPosts*/}
            <ListContainer>
              {posts.map((post) => (
                <div
                  className="select-post"
                  onClick={() => {
                    if (overlayState.slot) {
                      handleChangeFeaturedPosts(post.id, overlayState.slot);
                    }
                  }}
                  key={post.id}
                >
                  <PostCard
                    title={post.title}
                    subtitle={post.subtitle}
                    tag={post.tag}
                    author={post.author}
                    date={post.dateCreated}
                    image={
                      post.contentJSON?.blocks?.find(
                        (block: OutputBlockData) => block.type === 'image'
                      )?.data?.file?.url
                    }
                    link={''}
                  />
                </div>
              ))}
            </ListContainer>
          </div>
        </OverlayFeaturedPost>
      )}

      {/* FeaturedPosts */}
      <FeaturedPosts
        title={'Editar posts em destaque'}
        main={mainPosts.main}
        side1={mainPosts.side1}
        side2={mainPosts.side2}
        onChangePost={(slot) => {
          console.log('Abrir overlay para trocar', slot);
          handleOpenOverlay(slot);
        }}
        path={'/dashboard2490admin/posts-manager'}
      >
        <FeaturedPostModifier>
          <button>
            <GearIcon size={32} weight="duotone" />
            Mudar Post
          </button>
        </FeaturedPostModifier>
      </FeaturedPosts>

      <div className="Posts">
        <h3>Posts Disponíveis</h3>
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
                    label: 'Editar Post',
                    onClick: () =>
                      navigate(
                        `/dashboard2490admin/posts-manager/${post.id}/edit_post`
                      )
                  }}
                  secondaryAction={{
                    label: 'Deletar Post',
                    onClick: () => {
                      removePost(post.id);
                    }
                  }}
                />
              </Overlay>
              <div
                className="trigger-overlay"
                onClick={() => toggleCardOverlayActive(index)}
              ></div>
              <PostCard
                title={post.title}
                subtitle={post.subtitle}
                tag={post.tag}
                author={post.author}
                date={post.dateCreated}
                image={
                  post.contentJSON?.blocks?.find(
                    (block: OutputBlockData) => block.type === 'image'
                  )?.data?.file?.url
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
