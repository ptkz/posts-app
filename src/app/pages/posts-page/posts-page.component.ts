import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/constants/post';
import { Router } from '@angular/router';
import * as PostActions from '../../actions/post.actions';


import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  posts: Post[];

  constructor(
    private postsService: PostsService,
    private router: Router,
    private store: Store<AppState>
    ) {
      this.store.select('posts').subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    }


  ngOnInit() {
    /**
     * Read Posts from API and load them into the Store
     */
    this.postsService.getPosts().subscribe((response: Post[]) => {
      this.store.dispatch(new PostActions.LoadPosts(response));
    });
  }

  postClickHandler(post: Post) {
    this.router.navigate(['posts', post.id]);
  }

}
