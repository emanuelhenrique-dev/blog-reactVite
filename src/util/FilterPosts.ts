import type { OutputBlockData } from '@editorjs/editorjs';
import type { Post } from '../reducers/posts/reducer';

// procura texto nas list do ContextJSON do post
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function searchListItems(items: any[], q: string): boolean {
  return items.some((item) => {
    const contentMatch = item.content?.toLowerCase().includes(q);
    // busca nos subitens também
    const childrenMatch = item.items?.length
      ? searchListItems(item.items, q)
      : false;

    return contentMatch || childrenMatch;
  });
}

export function filterPosts(tag: string, searchTerm: string, posts: Post[]) {
  let filteredPosts = posts;

  if (tag !== 'todas') {
    filteredPosts = filteredPosts.filter((p) => p.tag === tag);
  }

  if (searchTerm.trim() !== '') {
    const q = searchTerm.toLowerCase();

    filteredPosts = filteredPosts.filter((p) => {
      // buscar no título, subtítulo e autor
      const basicMatch =
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q);

      // buscar dentro do conteúdo JSON
      const contentMatch = p.contentJSON?.blocks?.some(
        (block: OutputBlockData) => {
          if (block.type === 'paragraph' || block.type === 'header') {
            return block.data.text?.toLowerCase().includes(q);
          }
          if (block.type === 'list') {
            return searchListItems(block.data.items, q);
          }
          if (block.type === 'quote') {
            return block.data.text?.toLowerCase().includes(q);
          }
          return false;
        }
      );

      return basicMatch || contentMatch;
    });
  }

  return filteredPosts;
}
