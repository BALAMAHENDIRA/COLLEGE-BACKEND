import { ValidationService } from './../service/validation.service';
import { ClgserviceService } from './../service/clgservice.service';
import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../students/department-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments = [] as IDepartment[];
  department = {} as IDepartment;
  buttonview : any = 0;
  tabIndex : any = 0;
  departerror = '';
  constructor(private service: ClgserviceService, private valid: ValidationService) { }

  ngOnInit(): void {
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

  postDepartment(obj: any){
    this.service.postData("api/Departments", obj).subscribe(
      {
        next: (out: any) => {
           
      this.loadDepartments();
           
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
    var submit = false; 
    this.departerror = this.valid.DeptNameValidation(this.department.deptName);
     submit =  this.submitvalidation();
     if(submit == true){
      this.postDepartment(this.department);
      form.resetForm();
     }
    else{
     alert('please fill the details');
    }
   
  }

  updateDepartment(obj: any, id: any){
    this.service.update("api/Departments/",id,  obj).subscribe(
      {
        next: (out: any) => {
           
      this.loadDepartments();
      alert("Department updated successfully")
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

   updatedata(form: NgForm){
    var submit = false; 
    this.departerror = this.valid.DeptNameValidation(this.department.deptName);
     submit =  this.submitvalidation();
     if(submit == true){
      this.updateDepartment(this.department, this.department.deptId);
     form.resetForm();
     }
    else{
     alert('please fill the details');
    }
    }
 
  deleteitem(stuId: any){
    this.service.delete("api/Departments/", stuId).subscribe(
      {
        next: (out: any) => {
     this.loadDepartments();
         
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
  
  Delete(event: any){
    if (confirm('Are you sure you want to delete this department?')) {
      this.deleteitem(event.deptId);
    } 
 
  }

  Edit(event: any){
    this.tabIndex = 1;
    this.buttonview = 0;
    this.department = event;
  }
//validations:
  deptvalid(event: any){
    this.departerror = this.valid.DeptNameValidation(event.target.value);
  }
   //validation check submit function:
   submitvalidation(){
    if(this.department.deptName == null  ){
     return false;
    }
    else if(this.departerror == ''  ){
     return true;
    }else{
     return false;
 
    }
    }
}
