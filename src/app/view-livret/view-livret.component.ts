import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/services/section.service';

@Component({
  selector: 'app-view-livret',
  templateUrl: './view-livret.component.html',
  styleUrls: ['./view-livret.component.css']
})
export class ViewLivretComponent implements OnInit{
 
  sections=[{
    title:'test section 1',
    elivretid:{
      id:''
    },
  },{

    title:'test section 2',
    elivretid:{
      id:''
    },

  }]

  ngOnInit(): void {

    this.Ssection.section().subscribe((data:any)=>{
      this.sections=data;
      console.log(this.sections);
    })
  }
  constructor(private Ssection:SectionService){}




}
