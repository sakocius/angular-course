import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.sass']
})
export class LikeComponent {
  @Input('isActive') isActive : boolean;
  @Input('likesCount') likesCount : number;

  onClick() {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }

}