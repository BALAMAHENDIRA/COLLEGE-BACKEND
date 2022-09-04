import { ClgserviceService } from './../service/clgservice.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  rollno = '';
  password = '';
  result : any;
  error: any  ;
  constructor( private service: ClgserviceService, private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = '#0b0b5c';
  }

  CheckResult(roll: string, Pass: string) {
    this.service.checkResult(roll, Pass ).subscribe(
      {
        next: out => {
          this.result = out ;
          console.log(this.result);
          if(this.result == true){
            this.router.navigate(['marks']);
            localStorage.setItem('rollno', this.rollno);
            }
            else{
              this.error = "Roll number and Password does not match";
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
    if(this.rollno.length != 9){
      this.error = "Enter a valid Roll number";
    }
    else{
      this.error = '';
    }
  }

  updatePassword(event : any){
    this.password = event.target.value;
}
 

Submit(){
this.CheckResult(this.rollno,this.password);

}

}
