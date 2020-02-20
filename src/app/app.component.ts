import { Component } from "@angular/core";
import { FavoriteChangedEventArgs } from "./star/star.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "Angular app";
  post = {
    title: "Title",
    isActive: true
  };
  tweet = {
    body: "This is the body",
    isLiked: false,
    likesCount: 72
  };

  courses = [];

  viewMode = "map";
  canSave = true;

  task = {
    title: "Review applications",
    assignee: null
  };

  onActiveChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("CHANGED to", eventArgs);
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: "Course 1" },
      { id: 2, name: "Course 2" },
      { id: 3, name: "Course 3" }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  onAdd() {
    this.courses.push({ id: 4, name: "Course 4" });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
