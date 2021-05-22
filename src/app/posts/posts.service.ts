import { Post } from './post.model';
import { Subject } from 'rxjs';

export class PostsService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
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
    const newPost: Post = {title: postTitle, postDetails: postContent};
    this.posts.push(newPost);
    this.postsUpdated.next([...this.posts]);
  }

}
