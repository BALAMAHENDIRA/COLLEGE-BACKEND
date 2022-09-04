import { ClgserviceService } from './service/clgservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './demo/demo.component';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { MarksComponent } from './marks/marks.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { CourseComponent } from './course/course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MarksdashComponent } from './marksdash/marksdash.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacultystaticComponent } from './facultystatic/facultystatic.component';
import { DepartStaticComponent } from './depart-static/depart-static.component';
import { StudentStaticComponent } from './student-static/student-static.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'demo', component: DemoComponent},
  {path: 'result', component: ResultComponent},
  {path: 'marks', component: MarksComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dash', component: DashboardComponent},
  {path: 'student', component: StudentsComponent},
  {path: 'studentstatic', component: StudentStaticComponent},
  {path: 'facultystatic', component: FacultystaticComponent},
  {path: 'about', component: AboutComponent},
  {path: 'departmentstatic', component: DepartStaticComponent},


  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    ResultComponent,
    MarksComponent,
    LoginComponent,
    DashboardComponent,
    StudentsComponent,
    DepartmentComponent,
    CourseComponent,
    FacultyComponent,
    MarksdashComponent,
    HeaderComponent,
    FooterComponent,
    FacultystaticComponent,
    DepartStaticComponent,
    StudentStaticComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClgserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
