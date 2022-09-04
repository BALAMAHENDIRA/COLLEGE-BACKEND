import { IMarks } from './mark-model';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ClgserviceService } from '../service/clgservice.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  marks: any = [] as IMarks[];

  constructor(private service: ClgserviceService, private elementRef : ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = 'black';
   var roll  =  localStorage.getItem('rollno') || '{}';
    this.getmarks(roll);
  }

  getmarks(roll: string) {
    this.service.getmarks(roll).subscribe(
      {
        next: (out: any) => {
          this.marks = out ;
          console.log(this.marks);
           
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }


}
