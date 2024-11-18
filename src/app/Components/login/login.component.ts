import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
 
  LoginForm!:FormGroup
  constructor(private userService:UserService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.LoginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  Login(){
    let reqData={
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password
    }
    this.userService.Login(reqData).subscribe((res:any)=>{
      console.log(res);

      localStorage.setItem("token",res.data);
      sessionStorage.setItem("token",res.data);
    })
  }
}
