import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/services/section.service';

@Component({
  selector: 'app-view-livret',
  templateUrl: './view-livret.component.html',
  styleUrls: ['./view-livret.component.css']
})
export class ViewLivretComponent implements OnInit{

  sid: any;
 
  sections=[{
    title:'test section 1',
    elivretid:{
      id:'1'
    }

  },
  {
    title:'test section 1',
    elivretid:{
      id:'2'
    }

  }]

  ngOnInit(): void {

    this.Ssection.section(this.sid).subscribe((data:any)=>{
      this.sections=data;
      console.log(this.sections);
    })
  }
  
  constructor(private Ssection:SectionService,private route:ActivatedRoute){
    this.sid= this.route.snapshot.paramMap.get('id');
   console.log(this.sid);
    
  }




}
