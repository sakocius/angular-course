import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {
  isActive = false;
  title = 'the planet of the aPes';
  constructor() { }

  onClick() {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
  }

}
