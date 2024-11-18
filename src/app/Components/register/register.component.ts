import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  RegisterUser!:FormGroup
  constructor(private userService:UserService,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.RegisterUser=this.formBuilder.group({
      firstName:[""],
      lastName:[""],
      email:[""],
      password:[""]
    })
  }
 
  Create(){
    let regData={
      firstName: this.RegisterUser.value.firstName,
      lastName: this.RegisterUser.value.lastName,
      email: this.RegisterUser.value.email,
      password: this.RegisterUser.value.password
    } 
    this.userService.Register(regData).subscribe((res:any)=>{
         console.log(res);
    })
  }
}
