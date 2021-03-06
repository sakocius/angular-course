import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CoursesService } from "./courses.service";
import { AuthorsComponent } from "./authors/authors.component";
import { AuthorsService } from "./authors.service";
import { SummaryPipe } from "./summary.pipe";
import { StarComponent } from "./star/star.component";
import { TitlecasePipe } from "./titlecase.pipe";
import { PanelComponent } from "./panel/panel.component";
import { LikeComponent } from "./like/like.component";
import { InputFormatDirective } from "./input-format.directive";
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { NewCourseFormComponent } from "./new-course-form/new-course-form.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { PostComponent } from "./post/post.component";
import { PostService } from "./services/post.service";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    StarComponent,
    TitlecasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [CoursesService, AuthorsService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
