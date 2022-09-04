import { Router } from '@angular/router';
import { ClgserviceService } from './../service/clgservice.service';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rollno = '';
  password = '';
  result : any;
  error: any  ;
  constructor(private service: ClgserviceService, private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = '#0b0b5c';
  }

  adminLogin(roll: string, Pass: string) {
    this.service.adminlogin(roll, Pass).subscribe(
      {
        next: out => {
          this.result = out ;
          console.log(this.result);
          if(this.result == true){
            this.router.navigate(['dash']);
            localStorage.setItem('rollno', this.rollno);
            }
            else{
              this.error = "Admin and Password does not match";
            }
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }


  update(event : any){
    let regex = /A-Z0-9/;
     this.rollno = event.target.value;
    
  }

  updatePassword(event : any){
    this.password = event.target.value;
}
 

Submit(){
this.adminLogin(this.rollno,this.password);

}


}
