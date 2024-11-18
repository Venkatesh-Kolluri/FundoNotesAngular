import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetEmailComponent } from './Components/forget-email/forget-email.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forget-email',component:ForgetEmailComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,
     children:[
     {path:'get-notes',component:GetNotesComponent},
     {path:'trash',component:TrashComponent},
     {path:'archive',component:ArchiveComponent}
     ]
  },
  {path:'create-notes',component:CreateNotesComponent},

  {path:'display-notes',component:DisplayNotesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
