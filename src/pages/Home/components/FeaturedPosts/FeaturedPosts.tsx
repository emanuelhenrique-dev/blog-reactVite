import { ArrowRightIcon, CalendarDotsIcon } from '@phosphor-icons/react';
import {
  FeaturedAside,
  FeaturedMain,
  FeaturedPostsContainer,
  PostInfo,
  PostsWrapper,
  Tag
} from './FeaturedPosts.style';
import avatarImg from '/avatar.png';
import defaultImage from '/src/assets/pexels-jplenio-1103970.jpg';
import type { Post } from '../../../../reducers/posts/reducer';
import type { OutputBlockData } from '@editorjs/editorjs';
import { useNavigate } from 'react-router-dom';
import type { SlotKey } from '../../../PostsManager/PostsManager';
import { usePosts } from '../../../../contexts/PostsContext';
import { formatDate } from '../../../../util/FormatDate';

interface FeaturedPostsProps {
  title: string;
  main: Post['id'];
  side1: Post['id'];
  side2: Post['id'];
  children?: React.ReactNode;
  onChangePost?: (slot: SlotKey) => void;
  path?: string;
}
export function FeaturedPosts({
  title,
  main,
  side1,
  side2,
  children,
  onChangePost,
  path
}: FeaturedPostsProps) {
  const navigate = useNavigate();
  const { posts } = usePosts();

  // info dos cards
  const featuredCard = (postId: Post['id']) => {
    const post = posts.find((post) => post.id === postId);

    const card = {
      Id: post ? post.id : 'id-post-desconhecido',
      Image: post
        ? post.contentJSON.blocks.find(
            (block: OutputBlockData) => block.type === 'image'
          )?.data.file?.url ?? defaultImage
        : defaultImage,
      Tag: post ? post.tag : 'Tecnologia',
      Title: post ? post.title : 'Post em destaque X',
      Subtile: post
        ? post.subtitle
        : 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
      Author: post ? post.author : 'Author name',
      AvatarImg: post ? post.authorAvatar : avatarImg,
      CreateDate: post ? post.dateCreated : 'data desconhecida'
    };

    return card;
  };

  const mainCard = featuredCard(main);
  const side1Card = featuredCard(side1);
  const side2Card = featuredCard(side2);

  return (
    <FeaturedPostsContainer>
      <h2>{title}</h2>
      <PostsWrapper>
        <FeaturedMain>
          <div className="image-wrapper">
            {/* Aqui renderiza o botão/controle passado como children */}
            {children && (
              <div
                className="post-modifier"
                onClick={() => onChangePost?.('main')}
              >
                {children}
              </div>
            )}
            <div
              className="image-limit"
              onClick={() => navigate(`${path}/${mainCard.Id}`)}
            >
              <img src={mainCard.Image} alt="post recomendado 1" />
            </div>
          </div>
          <PostInfo onClick={() => navigate(`${path}/${mainCard.Id}`)}>
            <Tag $category={mainCard.Tag}>{mainCard.Tag}</Tag>
            <h3>{mainCard.Title}</h3>
            <div className="author-date">
              <img src={mainCard.AvatarImg} alt="imagem avatar" />
              <span>{mainCard.Author}</span>
              <span></span>
              <span>
                <CalendarDotsIcon size={10} /> {formatDate(mainCard.CreateDate)}
              </span>
            </div>
            <p>{mainCard.Subtile}</p>
            <button>
              Continuar lendo <ArrowRightIcon size={12} />
            </button>
          </PostInfo>
        </FeaturedMain>
        <FeaturedAside>
          <div className="card-post">
            <div className="image-wrapper">
              {/* Aqui renderiza o botão/controle passado como children */}
              {children && (
                <div
                  className="post-modifier"
                  onClick={() => onChangePost?.('side1')}
                >
                  {children}
                </div>
              )}
              <img
                onClick={() => navigate(`${path}/${side1Card.Id}`)}
                src={side1Card.Image}
                alt="post recomendado 2"
              />
            </div>
            <PostInfo onClick={() => navigate(`${path}/${side1Card.Id}`)}>
              <Tag $category={side1Card.Tag}>{side1Card.Tag}</Tag>
              <h3>{side1Card.Title}</h3>
              <div className="author-date">
                <img src={side1Card.AvatarImg} alt="imagem avatar" />
                <span>{side1Card.Author}</span>
                <span></span>
                <span>
                  <CalendarDotsIcon size={10} />
                  {formatDate(side1Card.CreateDate)}
                </span>
              </div>
              <p>{side1Card.Subtile}</p>
            </PostInfo>
          </div>
          <div className="card-post">
            <div className="image-wrapper">
              {/* Aqui renderiza o botão/controle passado como children */}
              {children && (
                <div
                  className="post-modifier"
                  onClick={() => onChangePost?.('side2')}
                >
                  {children}
                </div>
              )}
              <img
                onClick={() => navigate(`${path}/${side2Card.Id}`)}
                src={side2Card.Image}
                alt="post recomendado 3"
              />
            </div>
            <PostInfo onClick={() => navigate(`${path}/${side2Card.Id}`)}>
              <Tag $category={side2Card.Tag}>{side2Card.Tag}</Tag>
              <h3>{side2Card.Title}</h3>
              <div className="author-date">
                <img src={side2Card.AvatarImg} alt="imagem avatar" />
                <span>{side2Card.Author}</span>
                <span></span>
                <span>
                  <CalendarDotsIcon size={10} />
                  {formatDate(side2Card.CreateDate)}
                </span>
              </div>
              <p>{side2Card.Subtile}</p>
            </PostInfo>
          </div>
        </FeaturedAside>
      </PostsWrapper>
    </FeaturedPostsContainer>
  );
}
