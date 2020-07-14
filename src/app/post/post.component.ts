import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadRequestError } from "../common/bad-request-error";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.sass"],
})
export class PostComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPost().subscribe(
      (response) => {
        this.posts = response.json();
      },
      (error) => {
        alert("An unexpected error occured");
        console.log(error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = "";
    this.service.submitPost(post).subscribe(
      (response) => {
        post["id"] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      },
      (error: AppError) => {
        if (error instanceof BadRequestError) {
          // this.form.setErrors(error.json())
        } else {
          alert("An unexpected error occured");
          console.log(error);
        }
      }
    );
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(
      (response) => {
        console.log(response.json());
      },
      (error) => {
        alert("An unexpected error occured");
        console.log(error);
      }
    );
  }

  deletePost(post) {
    this.service.deletePost(345).subscribe(
      (response) => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("Already deleted");
        } else {
          alert("An unexpected error occured");
          console.log(error);
        }
      }
    );
  }
}
