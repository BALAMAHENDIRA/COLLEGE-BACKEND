import { ValidationService } from './../service/validation.service';
import { IStudent } from './../students/student-model';
import { ClgserviceService } from './../service/clgservice.service';
import { IMarks } from './../marks/mark-model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-marksdash',
  templateUrl: './marksdash.component.html',
  styleUrls: ['./marksdash.component.css']
})
export class MarksdashComponent implements OnInit {

  markerror1 = '';
  markerror2 = '';
  markerror3 = '';
  markerror4 = '';
  markerror5 = '';
  markerror6 = '';
  markerror7 = '';
  markerror8 = '';

  marks : any = [] as IMarks[];
  mark: any = {} as IMarks;
  buttonview : any = 0;
  tabIndex : any = 0;
  students: any = [] as IStudent[];
  cgpa: any | null = [] as IMarks[];
  vari: any | null = [] as IMarks[];

  sem1: number = 0;
  sem2: number = 0;
  sem3: any = 0;
  sem4: any = 0;
  sem5: any = 0;
  sem6: any = 0;
  sem7: any = 0;
  sem8: any = 0;

 //cgpa : any = {} ;

  result: any;
  new : any ;


  constructor(private service: ClgserviceService, private valid: ValidationService) { }

  ngOnInit(): void {
    this.loadMarks();
    this.loadstudents();
    //this.demo();
  }

 

  loadMarks(){
    this.service.readdata("api/Marks").subscribe(
      {
        next: (out: any) => {
          this.marks = out as IMarks[];
          console.log(this.marks); 
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  deleteitem(stuId: any){
    this.service.delete("api/Marks/", stuId).subscribe(
      {
        next: (out: any) => {
     this.loadMarks();
         
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  Delete(event: any){
    if (confirm('Are you sure you want to delete this Marklist?')) {
      this.deleteitem(event.markId);
    } 
 
  }

  postmark(obj: any){
    this.service.postData("api/Marks", obj).subscribe(
      {
        next: (out: any) => {
           
      this.loadMarks();
           
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
    this.markerror1 = this.valid.MarksValidation(this.mark.sem1);
    this.markerror2 = this.valid.MarksValidation(this.mark.sem2);
    this.markerror3 = this.valid.MarksValidation(this.mark.sem3);
    this.markerror4 = this.valid.MarksValidation(this.mark.sem4);
    this.markerror5 = this.valid.MarksValidation(this.mark.sem5);
    this.markerror6 = this.valid.MarksValidation(this.mark.sem6);
    this.markerror7 = this.valid.MarksValidation(this.mark.sem7);
    this.markerror8 = this.valid.MarksValidation(this.mark.sem8);


  
 
    submit =  this.submitvalidation();
    if(submit == true){
      this.mark.cgpa = this.result;

      this.postmark(this.mark);
      form.resetForm();
      this.result = '';
    }
   else{
    alert('Please fill valid data');
   }
   

   
  }

  loadstudents() {
    this.service.readdata("api/Marks/GetStudentsByMarks").subscribe(
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
  updateDepartment(obj: any, id: any){
    this.service.update("api/Marks/",id,  obj).subscribe(
      {
        next: (out: any) => {
           
      this.loadMarks();
      alert("Marks updated successfully")
           
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
    // this.markerror1 = this.valid.MarksValidation(this.mark.sem1);
    // this.markerror2 = this.valid.MarksValidation(this.mark.sem2);
    // this.markerror3 = this.valid.MarksValidation(this.mark.sem3);
    // this.markerror4 = this.valid.MarksValidation(this.mark.sem4);
    // this.markerror5 = this.valid.MarksValidation(this.mark.sem5);
    // this.markerror6 = this.valid.MarksValidation(this.mark.sem6);
    // this.markerror7 = this.valid.MarksValidation(this.mark.sem7);
    // this.markerror8 = this.valid.MarksValidation(this.mark.sem8);


  
 
    submit =  this.submitvalidation();
    if(submit == true){
      
    this.mark.cgpa = this.result;
    this.updateDepartment(this.mark, this.mark.markId);
    form.resetForm();
    this.result = '';
    }
   else{
    alert('Please fill valid data');
   }
   


   }

   Edit(event: any){
    this.tabIndex = 1;
    this.buttonview = 0;
    this.mark = event;
    this.result = '';
  }

  //cgpa calculation
  cgpa1(event:any){
    if(event.target.value == ""){
        this.cgpa.splice(0, 1);
        this.sem1 = 0;
      console.log('len'+ this.cgpa.length);
        
   }
 
    else{
      this.cgpa[0] = 1;
      this.sem1 = event.target.value;
      console.log("event: "+ this.sem1);
      console.log('len'+ this.vari.length);
    }
   this.cgpacalc();

  }


  cgpa2(event:any){
    if(event.target.value == ""){
      this.cgpa.splice(1, 1);
       this.sem2 = 0;
    console.log('len'+ this.cgpa.length);
      
 }

  else{
    this.cgpa[1] = 1;
    console.log('len'+ this.cgpa.length);
    this.sem2 = event.target.value;
    
  }
  this.cgpacalc();

  }

  cgpa3(event:any){
    if(event.target.value == ""){
      this.cgpa.splice(2, 1);
       this.sem3 = 0;
    console.log('len'+ this.cgpa.length);    
 }

  else{
    this.cgpa[2] = 1;
    console.log('len'+ this.cgpa.length);
    this.sem3 = event.target.value;
    
  }
  this.cgpacalc();

  }

  cgpa4(event:any){
    if(event.target.value == ""){
      this.cgpa.splice(3, 1);
       this.sem4 = 0;
    console.log('len'+ this.cgpa.length);
      
 }

  else{
    this.cgpa[3] = 1;
    console.log('len'+ this.cgpa.length);
    this.sem4 = event.target.value;
    
  }
  this.cgpacalc();

  }

  cgpa5(event:any){
    if(event.target.value == ""){
      this.cgpa.splice(4, 1);
       this.sem5 = 0;
    console.log('len'+ this.cgpa.length);
      
 }

  else{
    this.cgpa[4] = 1;
    console.log('len'+ this.cgpa.length);
    this.sem5 = event.target.value;
    
  }
  this.cgpacalc();

  }

  cgpa6(event:any){
    if(event.target.value == ""){
      this.cgpa.splice(5, 1);
       this.sem6 = 0;
    console.log('len'+ this.cgpa.length);
      
 }

  else{
    this.cgpa[5] = 1;
    console.log('len'+ this.cgpa.length);
    this.sem6 = event.target.value;
    
  }
  this.cgpacalc();

  }

  cgpa7(event:any){
    if(event.target.value == ""){
      this.cgpa.splice(6, 1);
       this.sem7 = 0;
    console.log('len'+ this.vari.length);
      
 }

  else{
    this.cgpa[6] = 1;
    console.log('len'+ this.vari.length);
    this.sem7 = event.target.value;
    
  }
  this.cgpacalc();

  }
  cgpa8(event:any){
    if(event.target.value == ""){
      this.cgpa.splice(7, 1);
       this.sem8 = 0;
    console.log('len'+ this.vari.length);
      
 }

  else{
    this.cgpa[7] = 1;
    console.log('len'+ this.vari.length);
    this.sem8 = event.target.value;
    
  }
  this.cgpacalc();

  }
 
  cgpacalc(){
     
      var a = +this.sem1 + +this.sem2 + +this.sem3 + +this.sem4 + +this.sem5 + +this.sem6 + +this.sem7 + +this.sem8 ;
  this.filter(this.cgpa);

      this.result = a/this.vari.length;
      console.log("t: "+a);
      console.log("value = " + this.result);
  }

  filter(obj: any){
    

//  number[]
this.vari = obj.filter((element: any): element is number => {
  return element !== null;
});
 
  }

  //validation
  markvalid1(event: any){
    this.markerror1 = this.valid.MarksValidation(event.target.value);
  }
  markvalid2(event: any){
    this.markerror2 = this.valid.MarksValidation(event.target.value);
  }
  markvalid3(event: any){
    this.markerror3 = this.valid.MarksValidation(event.target.value);
  }
  markvalid4(event: any){
    this.markerror4 = this.valid.MarksValidation(event.target.value);
  }
  markvalid5(event: any){
    this.markerror5 = this.valid.MarksValidation(event.target.value);
  }
  markvalid6(event: any){
    this.markerror6 = this.valid.MarksValidation(event.target.value);
  }
  markvalid7(event: any){
    this.markerror7 = this.valid.MarksValidation(event.target.value);
  }
  markvalid8(event: any){
    this.markerror8 = this.valid.MarksValidation(event.target.value);
  }

   //validation check submit function:
   submitvalidation(){
    if(this.mark.sem1 == null || this.mark.sem2 == null || this.mark.sem3 == null || this.mark.sem4 == null || this.mark.sem5 == null || this.mark.sem6 == null || this.mark.sem7 == null || this.mark.sem8 == null ){
     return false;
    }
    else if(this.markerror1 == '' ||  this.markerror2 == '' ||  this.markerror3 == '' || this.markerror4 == '' || this.markerror5 == '' ||  this.markerror6 == '' ||  this.markerror7 == '' || this.markerror8 == ''  ){
     return true;
    }else{
     return false;
 
    }
    }
}
