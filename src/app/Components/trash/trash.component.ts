import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent implements OnInit{
  @Input() noteList:any;
  trashList:any
  constructor(private notesService:NotesService){}
  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    this.notesService.getNotes().subscribe((response:any)=>{
      this.trashList=response.data
      this.trashList=this.trashList.filter((object:any)=>{
        return object.isArchive==false && object.isTrash==true;
      })
      console.log(this.trashList)
    })
  }
}
