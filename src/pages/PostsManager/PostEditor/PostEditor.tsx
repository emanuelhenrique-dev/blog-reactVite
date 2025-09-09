import { v4 as uuid } from 'uuid';
//types
import type { Post } from '../../../reducers/posts/reducer';

// contexts
import { usePosts } from '../../../contexts/PostsContext';

//rrd imports
import { useParams } from 'react-router-dom';

interface PostInput {
  title: string;
  subtitle: string;
  tag: 'Tecnologia' | 'Design' | 'Ti Concursos';
  contentJSON: string;
}

export function PostEditor() {
  const { id } = useParams();
  const { posts, addPost, updatePost } = usePosts();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <p>Post não encontrado</p>;
  }

  type UserEntry = 'name' | 'avatar';

  // Pega o usuário logado e imagem do localStorage
  function getLoggedAdminUser(entry: UserEntry): string {
    const storedAdminUser = localStorage.getItem('AdminUser');

    if (!storedAdminUser) {
      return entry === 'name' ? 'Desconhecido' : '/default-avatar.png';
    }

    const parsed = JSON.parse(storedAdminUser);

    if (entry === 'name') {
      return parsed.name ?? 'Desconhecido';
    }
    if (entry === 'avatar') {
      return parsed.avatarImg ?? '/default-avatar.png';
    }

    return '';
  }

  function handleCreatePost(data: PostInput) {
    const newPost: Post = {
      id: uuid(),
      author: getLoggedAdminUser('name'),
      authorAvatar: getLoggedAdminUser('avatar'),
      lastUpdateAuthor: getLoggedAdminUser('name'),
      dateCreated: new Date().toISOString(),
      dateUpdated: new Date().toISOString(),
      ...data
    };

    addPost(newPost);
  }

  function handleUpdatePost(data: PostInput) {
    if (!post) {
      console.error('Não foi achado o post para atualizar');
      return;
    }

    const editedPost: Post = {
      id: post.id,
      author: post.author,
      authorAvatar: post.authorAvatar,
      lastUpdateAuthor: getLoggedAdminUser('name'),
      dateCreated: post.dateCreated,
      dateUpdated: new Date().toISOString(),
      ...data
    };
    updatePost(editedPost);
  }

  return <div>PostEditor</div>;
}
