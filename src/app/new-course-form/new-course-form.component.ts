import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-new-course-form",
  templateUrl: "./new-course-form.component.html",
  styleUrls: ["./new-course-form.component.sass"],
})
export class NewCourseFormComponent implements OnInit {
  form;

  get topics() {
    return <FormArray>this.form.get("topics");
  }
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  ngOnInit(): void {}

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
