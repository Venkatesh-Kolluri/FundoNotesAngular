import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  Login(reqData:any){
    let header={
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    }
    return this.http.PostMethod("https://localhost:44395/api/User/login",reqData,false,header);
  }

  Register(reqData:any){
    let header={
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    }
    return this.http.PostMethod("https://localhost:44395/api/User/register",reqData,false,header);
  }

  ForgetPassword(reqData:any){
    let header={
      headers:new Headers({
        "content-type":"application/json"
      })
    }
    return this.http.PostMethod("https://localhost:44395/api/User/forgetpassword?userEmail="+reqData.email,{},false,header);
  }

}