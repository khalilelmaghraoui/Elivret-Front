import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/services/section.service';
// Importing forms module
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
   
   

@Component({
  selector: 'app-user-view-livret',
  templateUrl: './user-view-livret.component.html',
  styleUrls: ['./user-view-livret.component.css']
})
export class UserViewLivretComponent {
  livretId: any;

  selected = 'option2';

  sections=[{
    title:'test section 1',
    personType:'',
    id:'1',
    visibility:'true'
  },
  {
    title:'test section 1',
    personType:'',
    id:'2',
    visibility:'true'
  }];



  section={
    id:'',
    title: '',
    personType:'',
    visibility:'true'
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


}
