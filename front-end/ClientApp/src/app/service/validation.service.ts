import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  userName(obj: any){
    var value = '';
    var regex = "^[^0-9]+$";
    if( obj == ''){
      value = 'this field is required';
    }
   else if(obj == null){
      value = 'this field is required';
    
    }
   else if(typeof obj !== 'string'){
        value ='only characters are allowed';
    }
    else if(obj.length < 4){
      value = "Minimum 4 characters required";
    }
    else if(!obj.match(regex)){
      value="No numbers are allowed in this field";
    }
    else{
      value = '';
    }
    return value;
  }

  passwordValidation(obj: any){
   var  value = '';
   var regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
    if(obj == ''){
      value = 'this field is required';
    }
    else if(obj == null){
      value = 'this field is required';
    
    }
    else if(obj.length < 6){
      value = "Minimum 6 characters required";
    }
    else if(!obj.match(regex)){
      value = "At least 3 of the following: uppercase, lowercase, numeric, or special characters. "
    }
    else{
      value = '';
    }
    return value;
  }

  PhoneValidation(obj: any){
   var regex = '/[^0-9]/g';
   var  value = '';
   if(obj == ''){
    value = 'this field is required';
  }
  else if(obj == null){
    value = 'this field is required';
  
  }
  else if(obj.length != 10){
    value = "Enter valid phone number";
  }
  else if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(obj)){
    value = '';
  }
   
  else{
    value = 'phone number is not valid';
  }
  return value;
  }

  EmailValidation(obj: any){
    var regex = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
    var  value = '';
    if(obj == ''){
     value = 'this field is required';
   }
  else if(obj == null){
    value = 'this field is required';
  
  }
   else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(obj)){
     value = "";
   }
    
   else{
     value = 'Enter valid Email Id';
   }
   return value;
   }

   RollnumberlValidation(obj: any){
    var  value = '';
    if(obj == ''){
     value = 'this field is required';
   }
   else if(obj == null){
    value = 'this field is required';
  
  }
  
   else if(obj.length != 9){
     value = "Enter valid roll number ";
   }
    
   else{
     value = '';
   }
   return value;
   }

   YearValidation(obj: any){
    var  value = '';
if(obj == null){
  value = 'this field is required';

}
   else if(obj == ''){
     value = 'this field is required';
   }
  
   else if(obj > 4){
     value = "Enter valid year";
   }
   else if(obj <= 0){
    value = "Enter valid year";
  }
    
   else{
     value = '';
   }
   return value;
   }

   DepartmentValidation(obj: any){
    var  value = '';

    if(obj == null){
      value = 'this field is required'; 
    }
  }

  SalaryValidation(obj: any){
    var  value = '';
    if(obj == ''){
     value = 'this field is required';
   }
   else if(obj == null){
     value = 'this field is required';
   
   }
    
   else if(/^[1-9]\d*(\.\d+)?$/.test(obj)){
     value = '';
   }
   else{
    value = 'It is not valid';
   }
    return value;
  }

  DeptNameValidation(obj: any){
    var regex = "^[^0-9]+$";
    var  value = '';
    if(obj == ''){
     value = 'this field is required';
   }
   else if(obj == null){
     value = 'this field is required';
   
   }
   else if(!obj.match(regex)){
    value="No numbers are allowed in this field";
  }
    
   else{
    value = '';
   }
    return value;
  }

  MarksValidation(obj: any){
    var regex = "^[^0-9]+$";
     
    var  value = '';
    if(obj == ''){
     value = 'this field is required';
   }
   else if(obj == null){
     value = 'this field is required';
   
   }
   else if(obj.match(regex)){
    value="only numbers are allowed in this field";
  }

  else if(obj > 10){
    value="CGPA should be less than 10";

  }
    
   else{
    value = '';
   }
    return value;
  }
}
