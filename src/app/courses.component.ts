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
    <img [src]='imgUrl' />
    <table>
      <tr>
        <td [attr.colspan]='colSpan'>Something</td>
        <td [attr.colspan]='colSpan'>Something</td>
        <td [attr.colspan]='colSpan'>Darkside</td>
      </tr>
    </table>
    <button class='btn btn-primary' [class.active]='isActive' [style.backgroundColor]='isActive ? "blue" : "white"' (click)='onSave($event)'>Save</button>
    <input [value]="email" (keyup)="email = $event.target.value; onKeyUp()" />
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <h2>{{ course.title | uppercase | lowercase}}</h2>
    <ul>
      <li>{{ course.students | number}}</li>
      <li>{{ course.rating | number:'1.2-2'}}/5</li>
      <li>{{ course.price | currency:'EUR'}}</li>
      <li>{{ course.releaseDate | date:'shortDate' }}</li>
    </ul>
    <p>{{ course.text | summary:10}}</p>
    `
})

export class CoursesComponent {
  email= 'me@email.com';
  title = 'List of courses';
  courses: string[];
  imgUrl = 'https://picsum.photos/420/128';
  colSpan = 2;
  isActive = true;
  course = {
    title: "The complete angular course",
    rating: 4.9745,
    students: 30123,
    price: 190.35,
    releaseDate: new Date(2016, 3, 1),
    text: 'The Seigenthaler biography incident[2] led to media criticism of the reliability of Wikipedia. This incident began in May 2005 with the anonymous posting of a hoax Wikipedia article with false, negative allegations about John Seigenthaler, a well-known American journalist. In March 2007, Wikipedia was again the subject of media attention with the Essjay controversy, which involved a prominent English Wikipedia editor and administrator who claimed he was a "tenured professor of religion at a private university" with a "Ph.D. in theology and a degree in canon law" when in fact he was a 24-year-old who held no advanced degrees.'
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  //Logic for calling HTTP service
  onSave($event) {
    console.log('button was clicked', $event);
  }

  onKeyUp() {
    console.log(this.email);
  }

  getTitle() {
    return this.title;
  }

}