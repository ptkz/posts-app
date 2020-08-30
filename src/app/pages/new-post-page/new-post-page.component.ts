import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/constants/post';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as PostActions from '../../actions/post.actions';

@Component({
  selector: 'app-new-post-page',
  templateUrl: './new-post-page.component.html',
  styleUrls: ['./new-post-page.component.scss']
})
export class NewPostPageComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  postForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });

  ngOnInit() {
  }

  onSubmit() {
    /** Construct the saveable object */
    const post: Post = {
      title: this.postForm.value.title,
      body: this.postForm.value.body,
      userId: 1 // Hardcoded UserId
    };

    /** Post object sent to the API */
    this.postsService.postPost(post).subscribe((resp: Post) => {
      console.log(resp);

      /** Save the saved Post object to the Store */
      this.store.dispatch(new PostActions.AddPost(resp));

      this.router.navigate(['posts']);
    });

  }

}
