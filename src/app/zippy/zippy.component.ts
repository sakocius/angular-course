import { Component, Input } from "@angular/core";

@Component({
  selector: "zippy",
  templateUrl: "./zippy.component.html",
  styleUrls: ["./zippy.component.sass"]
})
export class ZippyComponent {
  @Input("title") title: string;
  isActive = false;

  constructor() {}

  onClick() {
    this.isActive = !this.isActive;
  }
}
