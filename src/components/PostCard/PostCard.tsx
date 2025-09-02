//assets
import { ArrowUpRightIcon, CalendarDotsIcon } from '@phosphor-icons/react';
import image7 from '/image7.png';
import avatarImg from '/avatar.png';

// styles
import { CardInfo, ImageWrapper, PostCardContainer } from './PostCard.style';

// styled-components import
import { useTheme } from 'styled-components';

interface PostCardProps {
  categoria: string;
}

export function PostCard({ categoria }: PostCardProps) {
  const theme = useTheme();

  return (
    <PostCardContainer>
      <ImageWrapper
        category={categoria as 'Tecnologia' | 'Design' | 'Ti Concursos'}
      >
        <img src={image7} alt="Post Thumbnail" />
        <span>{categoria}</span>
      </ImageWrapper>

      <CardInfo>
        <div className="author-date">
          <img src={avatarImg} alt="imagem avatar" />
          <span>Jesica koli</span>
          <span></span>
          <span>
            <CalendarDotsIcon size={12} /> 28 Dezembro 2024
          </span>
        </div>
        <h3>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h3>
        <p>
          Os periféricos certos têm impacto direto no seu desempenho diário.
        </p>
        <ArrowUpRightIcon size={22} color={theme.colors['blue-primary']} />
      </CardInfo>
    </PostCardContainer>
  );
}
