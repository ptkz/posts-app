import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/constants/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router) { }

  posts: [Post];

  ngOnInit() {

    this.postsService.getPosts().subscribe((response: [Post]) => {
      this.posts = response;
    });

  }

  postClickHandler(post: Post) {
    this.router.navigate(['posts', post.id]);
  }

}
