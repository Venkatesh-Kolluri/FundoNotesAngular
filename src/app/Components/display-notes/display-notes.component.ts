import { Component, Input, input, OnInit } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent implements OnInit {

   @Input() noteList:any;
  
   constructor(private dialog: MatDialog){}
   ngOnInit(): void {
     
   }

   UpdateNoteDialog(notes: any) {
    const dialogRef = this.dialog.open(UpdateComponent, {
        width: '40%',
        height: 'auto',
        data: notes
    });
   console.log(notes);
    dialogRef.afterClosed().subscribe(result => {
       console.log(result);
    });
}
}
