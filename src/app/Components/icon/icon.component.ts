import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent implements OnInit{

  @Input() isArchive: boolean = false;
  @Input() isTrash: boolean = false;
  @Input() notesObject:any;

  token:any;
  constructor(private notesService:NotesService){this.token=localStorage.getItem('token')}
  ngOnInit(): void {
    
  }

  onArchive(){
    let reqData={ noteId: this.notesObject.noteID};
    this.notesService.archiveNotes(reqData).subscribe((res:any)=>{
            console.log(res);
    })
  }

  trash(){
    let reqData={
      noteId: this.notesObject.noteID
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
      noteId: this.notesObject.noteID
    }
    this.notesService.notesColor(reqData).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
