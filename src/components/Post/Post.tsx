import { CalendarDotsIcon } from '@phosphor-icons/react';
import type { Post } from '../../reducers/posts/reducer';
import { PostContainer, PostContent, PostHeader, TagPost } from './Post.style';
import { renderBlock } from '../../pages/PostsManager/PostEditor/renderBlock/renderBlock';

interface PostProps {
  post: Post;
}

export function Post({ post }: PostProps) {
  return (
    <PostContainer>
      <PostHeader>
        <div className="heading">
          <TagPost $category={post.tag}>{post.tag}</TagPost>
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
        </div>
        <div className="author-name">
          <img
            src={post.authorAvatar}
            alt={`Avatar de ${post.author}`}
            className="author-avatar"
          />
          <p>{post.author}</p>
          <div className="divider"></div>
          <CalendarDotsIcon size={16} />
          <p>{post.dateCreated}</p>
        </div>
      </PostHeader>
      <PostContent>
        {post.contentJSON?.blocks?.map((block, i: number) =>
          renderBlock(block, i)
        )}
      </PostContent>
    </PostContainer>
  );
}
