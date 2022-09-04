import { ValidationService } from './../service/validation.service';
import { ICourse } from './course-model';
import { IDepartment } from './department-model';
import { ClgserviceService } from './../service/clgservice.service';
import { IStudent } from './student-model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

max: any;
  buttonview : any = 1;
  tabIndex : any = 0;
  students = [] as IStudent[];
  departments = [] as IDepartment[];
  courses = [] as ICourse[];
  Usererror = '';
  Passerror = '';
  Phoneerror = '';
  Emailerror = '';
  Rollerror = '';
  Yearerror = '';
  departerror = '';
  courseerror = '';


  student = {} as IStudent;
  isEdit = false;
  constructor(private service: ClgserviceService, private valid: ValidationService) { }

  ngOnInit(): void {
    
    this.loadstudents();
    this.loadDepartments();
    this.loadCourse();
  }

  loadstudents() {
    this.service.readdata("api/Students").subscribe(
      {
        next: (out: any) => {
          this.students = out as IStudent[];
          console.log(this.students);
           
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

  postStudents(obj: any){
    this.service.postData("api/Students", obj).subscribe(
      {
        next: (out: any) => {
           
      this.loadstudents();
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  updateStudents(obj: any, id: any){
    this.service.update("api/Students/",id,  obj).subscribe(
      {
        next: (out: any) => {
           
      this.loadstudents();
      alert("Student updated successfully ")
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  getstudentsbyid(obj : any){
    this.service.getstudents( obj).subscribe(
      {
        next: (out: any) => {
           
       this.students = out as IStudent[];
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  sortData(param: string) {
    this.students = this.students.sort((a: any, b: any) => {
      if (a[param] < b[param])
        return -1;
      else if (a[param] > b[param])
        return 1;
      else
        return 0;
    });
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
    var submit = false;
   this.Usererror =  this.valid.userName(this.student.name);
   this.Passerror = this.valid.passwordValidation(this.student.password);

   this.Phoneerror = this.valid.PhoneValidation(this.student.phone);
   this.Emailerror = this.valid.EmailValidation(this.student.email);
   this.Yearerror = this.valid.YearValidation(this.student.currentYear);
   this.Rollerror = this.valid.RollnumberlValidation(this.student.rollNumber);


    submit =  this.submitvalidation();
    if(submit == true){
      this.postStudents(this.student);
      form.resetForm();
    }
   else{
    alert('please fill the details');
   }
   
  }

  deleteitem(stuId: any){
    this.service.delete("api/Students/", stuId).subscribe(
      {
        next: (out: any) => {
     this.loadstudents();
         
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  Edit(event: any){
    this.tabIndex = 1;
    this.buttonview = 0;
    this.student = event;
  }

  Delete(event: any){
    if (confirm('Are you sure you want to delete this student?')) {
      this.deleteitem(event.studentId);
    } 
    
  }
///
  updatedata(form: NgForm){
    var submit = false;
    this.Usererror =  this.valid.userName(this.student.name);
    this.Passerror = this.valid.passwordValidation(this.student.password);
 
    this.Phoneerror = this.valid.PhoneValidation(this.student.phone);
    this.Emailerror = this.valid.EmailValidation(this.student.email);
    this.Yearerror = this.valid.YearValidation(this.student.currentYear);
    this.Rollerror = this.valid.RollnumberlValidation(this.student.rollNumber);
 
    submit =  this.submitvalidation();
    if(submit == true){
      this.updateStudents(this.student, this.student.studentId);
      form.resetForm();
    }
   else{
    alert('all fields are required');
   }
   
  }

  //data validation:
  //username :
  uservalid(event: any){
    this.Usererror = this.valid.userName(event.target.value);
  }

  passvalid(event: any){
    this.Passerror = this.valid.passwordValidation(event.target.value);
    
  }
  phonevalid(event: any){
    this.Phoneerror = this.valid.PhoneValidation(event.target.value);
    
  }

  Emailvalid(event: any){
    this.Emailerror = this.valid.EmailValidation(event.target.value);
    
  }

  Rollvalid(event: any){
    this.Rollerror = this.valid.RollnumberlValidation(event.target.value);
    
  }

  Yearvalid(event: any){
    this.Yearerror = this.valid.YearValidation(event.target.value);
    
  }

  departmentValid(event: any){
    if(event.target.value == null){
       this.departerror = 'this field is required';
    }
    else{
      this.departerror = '';
    }
  }

  //validation check submit function:
  submitvalidation(){
   if(this.student.name == null || this.student.password == null || this.student.phone == null || this.student.email == null || this.student.rollNumber == null || this.student.currentYear == null){
    return false;
   }
   else if(this.Usererror == '' || this.Passerror == '' || this.Emailerror == '' || this.Phoneerror == '' || this.Rollerror == '' || this.Yearerror == ''){
    return true;
   }else{
    return false;

   }
   }
  

   //filter
   filter(event: any){
    console.log("bala");
    this.getstudentsbyid(event.target.value);
   }
}


