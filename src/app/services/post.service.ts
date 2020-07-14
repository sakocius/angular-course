import { Injectable, ɵisObservable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadRequestError } from "../common/bad-request-error";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {}

  getPost() {
    return this.http.get(this.url);
  }

  submitPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadRequestError());
        } else {
          return Observable.throw(new AppError(error));
        }
      })
    );
  }

  updatePost(post) {
    return this.http.patch(
      this.url + "/" + post.id,
      JSON.stringify({ isRead: true })
    );
  }

  deletePost(postId) {
    return this.http.delete(this.url + "/" + postId).pipe(
      catchError((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError());
        } else {
          return Observable.throw(new AppError(error));
        }
      })
    );
  }
}
