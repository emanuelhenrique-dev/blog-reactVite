import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode
} from 'react';
import { posts as initialPosts } from '../data/posts';
import { PostsReducer, type Post } from '../reducers/posts/reducer';
import {
  createPostAction,
  removePostAction,
  updatePostAction
} from '../reducers/posts/actions';

interface PostsContextType {
  posts: Post[];
  mainPosts: Post[];
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
  removePost: (postId: Post['id']) => void;
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
      mainPosts: {}
    },
    (initialState) => {
      const storedPostsAsJSON = localStorage.getItem(
        '@blog-react:posts-state-1.0.0'
      );
      return storedPostsAsJSON ? JSON.parse(storedPostsAsJSON) : initialState;
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

  // Atualizar e salva no storage
  useEffect(() => {
    const postsStateJSON = JSON.stringify(postsState);

    localStorage.setItem('@blog-react:posts-state-1.0.0', postsStateJSON);
  }, [postsState]);

  return (
    <PostsContext.Provider
      value={{ posts, mainPosts, addPost, removePost, updatePost }}
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
