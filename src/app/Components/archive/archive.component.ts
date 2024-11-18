import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit {

  archiveList:any;
  constructor(private notesService:NotesService){}
  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(){
    this.notesService.getNotes().subscribe((response:any)=>{
      this.archiveList=response.data
      this.archiveList=this.archiveList.filter((object:any)=>{
        return object.isArchive==true && object.isTrash==false;
      })
      console.log(this.archiveList);
    })
  }
}
