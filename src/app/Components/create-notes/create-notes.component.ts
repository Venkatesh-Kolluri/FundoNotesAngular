import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrl: './create-notes.component.scss'
})
export class CreateNotesComponent implements OnInit {

  display: boolean = true;
  submitted = false;
  inputNotesForm !: FormGroup;
  constructor(private notesService: NotesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inputNotesForm = this.formBuilder.group({
      title: [''],
      takenote: ['']
    })
  }

  submitNotes() {
    const noteData = {
      title: this.inputNotesForm.value.title,
      note: this.inputNotesForm.value.takenote
    };
    this.notesService.addNotes(noteData).subscribe(
      (res: any) => {
        console.log(noteData);
        console.log('Note added successfully', res);
      }
    );
  }
}
