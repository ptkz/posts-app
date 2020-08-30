import { createAction, props } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Post } from '../constants/post';

export const LOAD_POSTS = '[Posts] Load';
export const ADD_POST = '[Posts] Add';


// export const loadPosts = createAction('[Posts] Load Posts', props<{posts: [Post]}>());
// export const addNewPost = createAction('[Posts] Add New Post', props<{post: Post}>());


export class LoadPosts implements Action {
  readonly type = LOAD_POSTS;
  constructor(public payload: Post[]) {}
}


export class AddPost implements Action {
  readonly type = ADD_POST;
  constructor(public payload: Post) {}
}

export type Actions = LoadPosts | AddPost;
