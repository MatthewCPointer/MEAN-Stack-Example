import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {

  }

  getPosts() {
    this.httpClient.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts').subscribe(
      (postsData) => {
        this.posts = postsData.posts;
        this.postsUpdated.next([...this.posts]);
      }
    );

    // return [...this.posts];
    /*
    [this.posts] [] is the spread operator. Using this to create an *acutal* copy of the posts array, so that we
    aren't passing by reference. In typescript, everything besides primitives are passed by reference, which we don't want
    in this case, since the posts array should be maintained solely in the service. Now, if a component retrieving this array
    manipulates it after the fact, it will not affect the PostsService's posts array.

    Only primitive types are passed by value.
    */
  }

  getPostsUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(postTitle: string, postContent: string) {
    const newPost: Post = {id: null, title: postTitle, postDetails: postContent};
    this.httpClient.post<{message: string}>("http://localhost:3000/api/posts", newPost).subscribe((message) => {
      console.log(message);
    this.posts.push(newPost);
    this.postsUpdated.next([...this.posts]);
    });

  }

}
