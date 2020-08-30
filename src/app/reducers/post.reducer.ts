import { Action } from '@ngrx/store';
import { Post } from '../constants/post';
import * as PostActions from '../actions/post.actions';


const initialState: Post[] = [];

export function postReducer(state: Post[] = [], action: PostActions.Actions) {
  switch (action.type) {
    case PostActions.LOAD_POSTS:
      return action.payload;
    case PostActions.ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}

