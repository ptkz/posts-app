import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/constants/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() hoverOn = false;

  constructor() { }

  ngOnInit() {
  }

}
