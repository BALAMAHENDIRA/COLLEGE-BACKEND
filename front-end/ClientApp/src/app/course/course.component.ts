import { IDepartment } from './../students/department-model';
import { ICourse } from './../students/course-model';
import { ClgserviceService } from './../service/clgservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses : any = [] as ICourse[];
  departments: any = [] as IDepartment[];
  course = {} as ICourse;
  buttonview : any = 0;
  tabIndex : any = 0;
  constructor(private service: ClgserviceService) { }

  ngOnInit(): void {
    this.loadCourse();
    this.loadDepartments();
  }

  loadCourse(){
    this.service.readdata("api/Courses").subscribe(
      {
        next: (out: any) => {
          this.courses = out as ICourse[];
          console.log(this.courses);
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  loadDepartments(){
    this.service.readdata("api/Departments").subscribe(
      {
        next: (out: any) => {
          this.departments = out as IDepartment[];
          console.log(this.departments);
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  viewform(value: any){
    this.buttonview = value;
    if(this.tabIndex != 1){
    this.tabIndex = value;
    }
    else{
      this.tabIndex = 0;
    }
  }

  postdata(form: NgForm){
    this.postCourse(this.course);
    form.resetForm();
  }
  postCourse(obj: any){
    this.service.postData("api/Courses", obj).subscribe(
      {
        next: (out: any) => {
           
      this.loadCourse();
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  Delete(event: any){
    if (confirm('Are you sure you want to delete this course?')) {
      this.deleteitem(event.courseId);
    } 
  }

  deleteitem(stuId: any){
    this.service.delete("api/Courses/", stuId).subscribe(
      {
        next: (out: any) => {
     this.loadCourse();
         
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  updateCourses(obj: any, id: any){
    this.service.update("api/Courses/",id,  obj).subscribe(
      {
        next: (out: any) => {
           
      this.loadCourse();
      alert("Course updated successfully")
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

   updatedata(form: NgForm){
     this.updateCourses(this.course, this.course.courseId);
     form.resetForm();
   }

   
  Edit(event: any){
    this.tabIndex = 1;
    this.buttonview = 0;
    this.course = event;
  }
}
