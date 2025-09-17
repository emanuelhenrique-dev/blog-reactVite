import type { OutputData } from '@editorjs/editorjs';
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
  tag: 'Tecnologia' | 'Design' | 'Ti Concursos' | 'Programação';
  dateCreated: string;
  dateUpdated: string;
  contentJSON: OutputData; //PostContent;
}

export interface MainPosts {
  main: string;
  side1: string;
  side2: string;
}

interface PostsState {
  posts: Post[];
  mainPosts: MainPosts;
}

export const PostsReducer = (state: PostsState, action: Actions) => {
  switch (action.type) {
    // criar post
    case ActionTypes.CREATE_POST: {
      return produce(state, (draft) => {
        draft.posts.unshift(action.payload.data);
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

    // atualizar o mainPost
    case ActionTypes.UPDATE_MAIN_POSTS: {
      return produce(state, (draft) => {
        draft.mainPosts[action.payload.slot] = action.payload.postId;
      });
    }
  }
  return state;
};
