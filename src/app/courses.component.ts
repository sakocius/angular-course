import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
//decorator function
@Component({
  selector: 'courses',
  template: `
    <h2>{{'Title: ' + getTitle()}}</h2>
    <ul>
      <li *ngFor='let course of courses'>{{course}}</li>
    </ul>
    `
})

export class CoursesComponent {
  title = 'List of courses';
  courses: string[];

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  //Logic for calling HTTP service

  getTitle() {
    return this.title;
  }

}