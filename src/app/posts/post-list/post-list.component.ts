import { Component, Input } from "@angular/core";
import { Post } from '../post.model';

@Component({
  templateUrl: './post-list.component.html',
  selector: 'app-post-list',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   { title: 'First Post', postDetails: 'This is post 1 content'},
  //   { title: 'Second Post', postDetails: 'This is post 2 content'},
  //   { title: 'Third Post', postDetails: 'This is post 3 content'}
  // ]
  @Input() posts: Post[] = [];
}
