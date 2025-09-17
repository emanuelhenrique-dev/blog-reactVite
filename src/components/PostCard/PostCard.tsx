//assets
import { ArrowUpRightIcon, CalendarDotsIcon } from '@phosphor-icons/react';
import avatarImg from '/avatar.png';
import defaultImage from '/src/assets/pexels-jplenio-1103970.jpg';
import { AdminUsers } from '../../data/users';

// styles
import { CardInfo, ImageWrapper, PostCardContainer } from './PostCard.style';

// styled-components import
import { useTheme } from 'styled-components';
import { formatDate } from '../../util/FormatDate';

interface PostCardProps {
  title: string;
  subtitle: string;
  tag: string;
  author: string;
  date: string;
  image?: string | undefined;
  link: string;
}

export function PostCard({
  title,
  subtitle,
  tag,
  author,
  date,
  image,
  link
}: PostCardProps) {
  const theme = useTheme();

  const authorImage =
    AdminUsers.find((user) => user.name === author)?.avatarImg ?? avatarImg;

  return (
    <PostCardContainer to={link}>
      <ImageWrapper $category={tag as 'Tecnologia' | 'Design' | 'Ti Concursos'}>
        <img src={image ?? defaultImage} alt="Post Thumbnail" />
        <span>{tag}</span>
      </ImageWrapper>

      <CardInfo>
        <div className="author-date">
          <img src={authorImage} alt="imagem avatar" />
          <span>{author}</span>
          <span></span>
          <span>
            <CalendarDotsIcon size={14} /> {formatDate(date)}
          </span>
        </div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </CardInfo>
      <ArrowUpRightIcon size={22} color={theme.colors['blue-primary']} />
    </PostCardContainer>
  );
}
