//assets
import { ArrowRightIcon, CalendarDotsIcon } from '@phosphor-icons/react';
import avatarImg from '/avatar.png';
import image1 from '/image1.png';
import image2 from '/image2.png';
import image3 from '/image3.png';

// styles
import {
  FeaturedAside,
  FeaturedMain,
  FeaturedPosts,
  Heading,
  HomeContainer,
  PostInfo,
  PostsListContainer,
  PostsWrapper,
  Tag
} from './home.style';

//components
import { PostList } from './PostList/PostList';

export function Home() {
  console.log('asdsad');
  return (
    <HomeContainer>
      <Heading>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h1>
      </Heading>
      <FeaturedPosts>
        <h2>Recomendado</h2>
        <PostsWrapper>
          <FeaturedMain>
            <div className="image-wrapper">
              <img src={image1} alt="post recomendado 1" />
            </div>
            <PostInfo>
              <Tag category="Tecnologia">Tecnologia</Tag>
              <h3>Periféricos essenciais para aumentar sua produtividade</h3>
              <div className="author-date">
                <img src={avatarImg} alt="imagem avatar" />
                <span>Jesica koli</span>
                <span></span>
                <span>
                  <CalendarDotsIcon size={10} /> 28 Dezembro 2024
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                doloribus distinctio doloremque, mollitia vitae esse quia
                dolorem quo fugit atque voluptas.
              </p>
              <button>
                Continuar lendo <ArrowRightIcon size={12} />
              </button>
            </PostInfo>
          </FeaturedMain>
          <FeaturedAside>
            <div>
              <img src={image2} alt="post recomendado 2" />
              <PostInfo>
                <Tag category="Design">Design</Tag>
                <h3>Figma facilidade</h3>
                <div className="author-date">
                  <img src={avatarImg} alt="imagem avatar" />
                  <span>Jesica koli</span>
                  <span></span>
                  <span>
                    <CalendarDotsIcon size={10} /> 01 Dezembro 2024
                  </span>
                </div>
                <p>
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get...
                </p>
              </PostInfo>
            </div>
            <div>
              <img src={image3} alt="post recomendado 3" />
              <PostInfo>
                <Tag category="Ti Concursos">Ti Concursos</Tag>
                <h3>Dicas para o CNU</h3>
                <div className="author-date">
                  <img src={avatarImg} alt="imagem avatar" />
                  <span>Jesica koli</span>
                  <span></span>
                  <span>
                    <CalendarDotsIcon size={10} /> 18 Novembro 2024
                  </span>
                </div>
                <p>
                  Os periféricos certos têm impacto direto no seu desempenho
                  diário.
                </p>
              </PostInfo>
            </div>
          </FeaturedAside>
        </PostsWrapper>
      </FeaturedPosts>

      <PostsListContainer>
        <PostList />
      </PostsListContainer>
    </HomeContainer>
  );
}
