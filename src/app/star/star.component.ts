import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {
  @Input('is-active') isActive = false;
  @Output('change') change = new EventEmitter();
  title = 'the planet of the aPes';
  constructor() { }

  onClick() {
    this.isActive = !this.isActive;
    this.change.emit({newValue: this.isActive});
  }

  ngOnInit(): void {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
