import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/constants/post';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post: Post;
  comments: Comment[];
  postNotFound = false;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    /** Read post Id from URL params */
    this.activatedRoute.params.subscribe(params => {

      /** Find the Post with proper Id from the Store */
      this.store.select('posts').subscribe((posts: Post[]) => {
        this.post = posts.find(post => post.id == params.id);

        if (!this.post) {
          /** If post was not found in the Store, get it from API */
          this.postsService.getPostById(params.id).subscribe((post: Post) => {
            this.post = post;

            /** If the post still not available - error is shown */
            if (!this.post) {
              this.postNotFound = true;
              console.log('PPost not found');
              return;
            }

          });
        }

        /** Get the comments for this Post from the API */
        this.postsService.getComments(params.id).subscribe((comments: [Comment]) => {
          this.comments = comments;
        });
      });
    });
  }

}
