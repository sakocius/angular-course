import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular app';
  post = {
    title: 'Title',
    isActive: true
  }
  tweet = {
    body: 'This is the body',
    isLiked: false,
    likesCount: 72
  }

  courses = [1, 2];

  onActiveChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('CHANGED to', eventArgs);
  }
}
