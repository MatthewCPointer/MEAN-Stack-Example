import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './post-list.component.html',
  selector: 'app-post-list',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First Post', postDetails: 'This is post 1 content'},
  //   { title: 'Second Post', postDetails: 'This is post 2 content'},
  //   { title: 'Third Post', postDetails: 'This is post 3 content'}
  // ]
  @Input() posts: Post[] = [];
  private postSubscription: Subscription;

  constructor(public postsService: PostsService) {
    this.postsService = postsService;
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postSubscription = this.postsService.getPostsUpdatedListener().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
