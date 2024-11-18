import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent  implements OnInit{

  ForgetPasswordForm!:FormGroup

  constructor(private userService:UserService,private formBuilder:FormBuilder ){}

  ngOnInit(): void {
    this.ForgetPasswordForm=this.formBuilder.group({
       email:[""]
    })
  }

  ForgetPassword(){
      let email={
        email:this.ForgetPasswordForm.value.email
      }
      this.userService.ForgetPassword(email).subscribe((res:any)=>{
        console.log(res);
      })
  }
 

}
