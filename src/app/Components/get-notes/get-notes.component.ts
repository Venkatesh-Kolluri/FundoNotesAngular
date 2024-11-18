import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrl: './get-notes.component.scss'
})
export class GetNotesComponent implements OnInit {

  constructor(private noteService:NotesService){}
   
   notesArray:any;
   token:any;
   ngOnInit(): void {
    this.submitNotes();

  }
  
  submitNotes() {
    this.token=localStorage.getItem('token');
    if (this.token) {
      this.noteService.getNotes().subscribe(
        (result: any) => {
          this.notesArray = result.data.filter((note: any) => note.isTrash == false && note.isArchive == false);
          console.log(result.data);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Token is missing');
    }
  }
}
