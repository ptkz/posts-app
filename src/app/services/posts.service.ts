import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../constants/post';

const POST_API_ROOT = 'https://jsonplaceholder.typicode.com';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${POST_API_ROOT}/posts`);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${POST_API_ROOT}/posts/${id}`);
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${POST_API_ROOT}/posts/${postId}/comments`);
  }

  postPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${POST_API_ROOT}/posts`, post);
  }


}
