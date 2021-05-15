import { Component } from '@angular/core';

@Component({
  templateUrl: './post-create.component.html',
  selector: 'app-post-create',
})
export class PostCreateComponent {
  enteredInput = '';
  newPost = 'NO CONTENT';

  onAddPost() {
    this.newPost = this.enteredInput;
  }
}
