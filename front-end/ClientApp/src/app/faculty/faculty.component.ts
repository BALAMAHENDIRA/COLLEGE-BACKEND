import { ValidationService } from './../service/validation.service';
import { IFaculty } from './faculty-model';
import { IDepartment } from './../students/department-model';
import { ClgserviceService } from './../service/clgservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  buttonview : any = 0;
  tabIndex : any = 0;
  departments: any = [] as IDepartment[];
  faculties: any = [] as IFaculty[];
  faculty: any = {} as IFaculty;
  Usererror = '';
  Passerror = '';
  Phoneerror = '';
  Emailerror = '';
  Yearerror = '';
  departerror = '';
  courseerror = '';
  salaryerror = '';

  constructor(private service: ClgserviceService, private valid: ValidationService) { }

  ngOnInit(): void {
    this.loadFaculty();
    this.loadDepartments();
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

  loadFaculty(){
    this.service.readdata("api/Faculties").subscribe(
      {
        next: (out: any) => {
          this.faculties = out as IFaculty[];
          console.log(this.faculties);
           
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

  updatedata(form: NgForm){
    var submit = false;
    this.Usererror =  this.valid.userName(this.faculty.name);
 
    this.Phoneerror = this.valid.PhoneValidation(this.faculty.phone);
    this.Emailerror = this.valid.EmailValidation(this.faculty.email);
    this.salaryerror = this.valid.SalaryValidation(this.faculty.salary);
 
    submit =  this.submitvalidation();
    if(submit == true){
    
      this.updateDepartment(this.faculty, this.faculty.facultyId);
      form.resetForm();
    }
   else{
    alert('all fields are required');
   }
   
  }

  updateDepartment(obj: any, id: any){
    this.service.update("api/Faculties/",id,  obj).subscribe(
      {
        next: (out: any) => {
           
      this.loadFaculty();
      alert("Faculty updated successfully")
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
  
  postDepartment(obj: any){
    this.service.postData("api/Faculties", obj).subscribe(
      {
        next: (out: any) => {
           
      this.loadFaculty();
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
  
   /// 
  postdata(form: NgForm){
    var submit = false;
    this.Usererror =  this.valid.userName(this.faculty.name);
 
    this.Phoneerror = this.valid.PhoneValidation(this.faculty.phone);
    this.Emailerror = this.valid.EmailValidation(this.faculty.email);
    this.salaryerror = this.valid.SalaryValidation(this.faculty.salary);
 
    submit =  this.submitvalidation();
    if(submit == true){
      this.postDepartment(this.faculty);
      form.resetForm();
    }
   else{
    alert('all fields are required');
   }
   

    
  }

  
  deleteitem(stuId: any){
    this.service.delete("api/Faculties/", stuId).subscribe(
      {
        next: (out: any) => {
     this.loadFaculty();
         
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  Delete(event: any){
    if (confirm('Are you sure you want to delete this faculty?')) {
      this.deleteitem(event.facultyId);
    } 
 
  }
  

  Edit(event: any){
    this.tabIndex = 1;
    this.buttonview = 0;
    this.faculty = event;
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

   

  salaryvalid(event: any){
    this.salaryerror = this.valid.SalaryValidation(event.target.value);
  }

   //validation check submit function:
   submitvalidation(){
    if(this.faculty.name == null || this.faculty.phone == null || this.faculty.email == null || this.faculty.salary == null || this.faculty.deptId == null ){
     return false;
    }
    else if(this.Usererror == '' ||  this.Emailerror == '' ||  this.salaryerror == '' || this.Phoneerror == ''  ){
     return true;
    }else{
     return false;
 
    }
    }
}
