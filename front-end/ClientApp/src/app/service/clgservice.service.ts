import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClgserviceService {

  APIUrl =  environment.APIUrl;

  constructor(private _http: HttpClient) { }

  checkResult(rollno: string, password: string){
    const url = "api/Students/CheckResult?rollno=";
     
    return this._http.get(`${this.APIUrl}${url}${rollno}&password=${password}`);
    
  }

  getmarks(rollno: string){
    const url = "api/Students/GetMarks?rollno=";
     
    return this._http.get(`${this.APIUrl}${url}${rollno}`);
    
  }

  getstudents(rollno: string){
    const url = "api/Students/GetStudentsbyDepartmentID?deptid=";
     
    return this._http.get(`${this.APIUrl}${url}${rollno}`);
    
  }

  adminlogin(rollno: string, password: string){
    const url = "api/Students/AdminLogin?rollno=";
     
    return this._http.get(`${this.APIUrl}${url}${rollno}&password=${password}`);
    
  }

  readdata(url: string){
    return this._http.get(`${this.APIUrl}${url}`);
  }

  postData(url: string, obj: any){
    return this._http.post(`${this.APIUrl}${url}`, obj);

  }

  deleteData(url: string, studId: any){
    return this._http.get(`${this.APIUrl}${url}${studId}`);

  }

  update(url: any, Id: any, obj: any){
    return this._http.put(`${this.APIUrl}${url}${Id}`, obj);
  }

  delete(url: any, id: any){
    return this._http.delete(`${this.APIUrl}${url}${id}`);

  }
}
