import type { Post } from './reducer';

export const ActionTypes = {
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  UPDATE_MAIN_POSTS: 'UPDATE_MAIN_POSTS'
} as const;

export type Actions =
  | {
      type: typeof ActionTypes.CREATE_POST;
      payload: {
        data: Post;
      };
    }
  | {
      type: typeof ActionTypes.UPDATE_POST;
      payload: {
        data: Post;
      };
    }
  | {
      type: typeof ActionTypes.DELETE_POST;
      payload: {
        postId: Post['id'];
      };
    }
  | {
      type: typeof ActionTypes.UPDATE_MAIN_POSTS;
      payload: {
        postId: Post['id'];
        slot: 'main' | 'side1' | 'side2';
      };
    };

export function createPostAction(data: Post) {
  return {
    type: ActionTypes.CREATE_POST,
    payload: {
      data
    }
  } satisfies Actions;
}

export function updatePostAction(data: Post) {
  return {
    type: ActionTypes.UPDATE_POST,
    payload: {
      data
    }
  } satisfies Actions;
}

export function removePostAction(postId: Post['id']) {
  return {
    type: ActionTypes.DELETE_POST,
    payload: {
      postId
    }
  } satisfies Actions;
}

export function updateMainPostAction(
  postId: Post['id'],
  slot: 'main' | 'side1' | 'side2'
) {
  return {
    type: ActionTypes.UPDATE_MAIN_POSTS,
    payload: {
      slot,
      postId
    }
  } satisfies Actions;
}
