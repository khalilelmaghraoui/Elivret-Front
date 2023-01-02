import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/services/section.service';

@Component({
  selector: 'app-view-livret',
  templateUrl: './view-livret.component.html',
  styleUrls: ['./view-livret.component.css']
})
export class ViewLivretComponent implements OnInit{

  livretId: any;
 
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

  }];

  section={
    id:'',
    title: '',
  }

  ngOnInit(): void {

    this.Ssection.section(this.livretId).subscribe((data:any)=>{
      this.sections=data;
      console.log(this.sections);
    })
  }
  
  constructor(private Ssection:SectionService,private route:ActivatedRoute){
    this.livretId= this.route.snapshot.paramMap.get('id');
   console.log(this.livretId);
    
  }

  

    formSubmit(){
      this.Ssection.addSection(this.livretId,this.section).subscribe((data)=>{
        this.section.title='';
        this.Ssection.section(this.livretId).subscribe((data:any)=>{
          this.sections=data;
          console.log(this.sections);
        })
      })

  }




}
