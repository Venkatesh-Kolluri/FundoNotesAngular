import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  token:any;

  constructor(private httpService:HttpService) { this.token=localStorage.getItem('token')}
 
  addNotes(reqData:any){
   
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.PostServiceReset('https://localhost:44395/api/Notes/note',reqData,true,header);
  }

  getNotes(){
    let header={
      headers:new HttpHeaders({
           'Content-type':'application/json',
           'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44395/api/Notes/getnotebyuserid',true,header);
  }

  archiveNotes(reqData:any){
    console.log(reqData);
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService(`https://localhost:44395/api/Notes/archived?noteId=${reqData.noteId}`, {}, true, header);
  }

  trashData(reqData:any){
    console.log(reqData);
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService(`https://localhost:44395/api/Notes/trash?noteId=${reqData.noteId}`, {}, true, header);
  }

  notesColor(reqData:any){
    console.log(reqData);
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService(`https://localhost:44395/api/Notes/color?noteId=${reqData.noteId}&color=${reqData.color}`, {}, true, header);
  }

  Update(reqData:any,id:any) {
    debugger;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }                               
    return this.httpService.putService(`https://localhost:44395/api/Notes/updatenote?NoteId=${id}`,reqData, true, header);
  }
}

