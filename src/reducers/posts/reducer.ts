import { ActionTypes, type Actions } from './actions';
import { produce } from 'immer';

// export interface PostContent {
//   time: number;
//   version: string;
//   blocks: {
//     type: string;
//     data: {
//       file?: { url: string };
//       text?: string;
//       level?: number;
//     };
//   }[];
// }

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorAvatar: string;
  lastUpdateAuthor: string;
  tag: 'Tecnologia' | 'Design' | 'Ti Concursos';
  dateCreated: string;
  dateUpdated: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentJSON: any; //PostContent;
}

interface PostsState {
  posts: Post[];
  mainPosts: Post[];
}

export const PostsReducer = (state: PostsState, action: Actions) => {
  switch (action.type) {
    // criar post
    case ActionTypes.CREATE_POST: {
      return produce(state, (draft) => {
        draft.posts.push(action.payload.data);
      });
    }
    // atualizar post
    case ActionTypes.UPDATE_POST: {
      return produce(state, (draft) => {
        const index = draft.posts.findIndex(
          (post) => post.id === action.payload.data.id
        );

        draft.posts[index] = action.payload.data;
      });
    }

    // Deletar post
    case ActionTypes.DELETE_POST: {
      return produce(state, (draft) => {
        const index = draft.posts.findIndex(
          (post) => post.id === action.payload.postId
        );

        draft.posts.splice(index, 1); // remove o post encontrado
      });
    }
  }
  return state;
};
