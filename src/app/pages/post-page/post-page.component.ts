import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/constants/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
  ) { }


  post: Post;
  comments: [Comment];

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);

      this.postsService.getPostById(params.id).subscribe((post: Post) => {
        this.post = post;
        this.postsService.getComments(params.id).subscribe((comments: [Comment]) => {
          this.comments = comments;

          console.log(this.post, this.comments);
        });
      });
    });
  }

}
