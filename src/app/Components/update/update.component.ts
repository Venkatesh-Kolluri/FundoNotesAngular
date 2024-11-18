import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit{

  title:any;
  note:any;
  id:any;
  color:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogbox: MatDialogRef<UpdateComponent>,
    private notesService:NotesService
  ){
    this.id=data.noteID,
    this.title=data.title,
    this.note=data.note,
    this.color=data.color  

  }
  ngOnInit(): void {
    
  }
  closeDialog(){
    let reqData={
      title: this.title,
      note:this.note,
      color:this.color,
    }
    this.notesService.Update(reqData,this.id).subscribe((res:any)=>{
      console.log(res);
      this.dialogbox.close();
    })
  }


  onArchive(){
    let reqData={ noteId: this.data.noteID};
    this.notesService.archiveNotes(reqData).subscribe((res:any)=>{
            console.log(res);
    })
  }

  trash(){
    let reqData={
      noteId: this.data.noteID
    }
    this.notesService.trashData(reqData).subscribe((res:any)=>{
      console.log(res);
    })
  }

  colorArray: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'Tomato' },
    { code: '#FF4500', name: 'OrangeRed'},
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'greenyellow' },
    { code: '#B0C4DE', name: 'LightSteelBlue' },
    { code: '#EEE8AA', name: 'PaleGoldenRod' },
    { code: '#7FFFD4', name: 'Aquamarine' },
    { code: '#FFE4C4', name: 'Bisque' },
    { code: '#C0C0C0', name: 'Silver' },
    { code: '#BC8F8F', name: 'RosyBrown' },
    { code: '#D3D3D3', name: 'grey' },
  ];

  selectColor(colors:any){
    let reqData={
      color: colors.name,
      noteId:this.data.noteID
    }
    this.notesService.notesColor(reqData).subscribe((res:any)=>{
      console.log(res);
    })
  }


}
