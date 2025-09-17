import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode
} from 'react';
import { posts as initialPosts } from '../data/posts';
import {
  PostsReducer,
  type MainPosts,
  type Post
} from '../reducers/posts/reducer';
import {
  createPostAction,
  removePostAction,
  updateMainPostAction,
  updatePostAction
} from '../reducers/posts/actions';

interface PostsContextType {
  posts: Post[];
  mainPosts: MainPosts;
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
  removePost: (postId: Post['id']) => void;
  updateMainPost: (
    postId: Post['id'],
    slot: 'main' | 'side1' | 'side2'
  ) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const PostsContext = createContext({} as PostsContextType);

export function PostsContextProvider({ children }: CartContextProviderProps) {
  const [postsState, dispatch] = useReducer(
    PostsReducer,
    {
      posts: initialPosts,
      mainPosts: { main: '', side1: '', side2: '' }
    },
    (initialState) => {
      const storedPostsAsJSON = localStorage.getItem(
        '@blog-react:posts-state-1.0.5'
      );
      const parsed = storedPostsAsJSON
        ? JSON.parse(storedPostsAsJSON)
        : initialState;

      parsed.posts = parsed.posts.sort(
        (a: Post, b: Post) =>
          new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
      );
      console.log(parsed);
      return parsed;
    }
  );

  const { posts, mainPosts } = postsState;

  function addPost(post: Post) {
    dispatch(createPostAction(post));
  }

  function updatePost(post: Post) {
    dispatch(updatePostAction(post));
  }

  function removePost(postId: Post['id']) {
    dispatch(removePostAction(postId));
  }

  function updateMainPost(
    postId: Post['id'],
    slot: 'main' | 'side1' | 'side2'
  ) {
    dispatch(updateMainPostAction(postId, slot));
  }

  // Atualizar e salva no storage
  useEffect(() => {
    const postsStateJSON = JSON.stringify(postsState);

    localStorage.setItem('@blog-react:posts-state-1.0.5', postsStateJSON);
  }, [postsState]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        mainPosts,
        addPost,
        removePost,
        updatePost,
        updateMainPost
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePosts() {
  const context = useContext(PostsContext);
  if (!context) throw new Error('usePosts must be used within PostProvider');
  return context;
}
