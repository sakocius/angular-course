import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authors = ['John Mack', 'Chris Valley', 'Jessica Burgess'];

  constructor() { }

  getAuthors() {
    return this.authors;
  }
}


