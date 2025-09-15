import type { Params } from 'react-router-dom';
import type { Post } from '../reducers/posts/reducer';

// nome do admin usuário
function getLoggedAdminUser() {
  const stored = localStorage.getItem('adminUser');
  // console.log(stored);
  if (!stored)
    return { name: 'Desconhecido', avatarImg: '/default-avatar.png' };
  const parsed = JSON.parse(stored);
  return { name: parsed.name, avatarImg: parsed.avatarImg };
}

//Carregar os posts antes de carregar a pagina
export async function postLoader({ params }: { params?: Params<string> }) {
  const storedPosts = localStorage.getItem('@blog-react:posts-state-1.0.0');

  if (!storedPosts) {
    throw new Response(JSON.stringify({ message: 'Posts não encontrados' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const user = getLoggedAdminUser();
  // ⚡ Caso seja página de "new post"
  if (!params?.id) {
    return { user };
  }

  // console.log(params);
  const { posts } = JSON.parse(storedPosts);
  // console.log(posts);

  const post = posts.find((p: Post) => p.id === params.id);

  if (!post) {
    throw new Response(JSON.stringify({ message: 'Post não encontrado' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return { post, user };
}
