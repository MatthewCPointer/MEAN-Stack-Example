import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  templateUrl: './post-create.component.html',
  selector: 'app-post-create',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredPostDetails = '';
  enteredTitle = '';
  @Output() postCreatedEvent = new EventEmitter<Post>();

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      postDetails: this.enteredPostDetails
    }
    this.postCreatedEvent.emit(post);
  }
}
