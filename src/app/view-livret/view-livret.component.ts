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

  

    formSubmit(){
      this.Ssection.addSection(this.livretId,this.section).subscribe((data)=>{
        this.section.title='';
        this.Ssection.section(this.livretId).subscribe((data:any)=>{
          this.sections=data;
          console.log(this.sections);
        })
      })

  }

  
  visibilityModel={
    id:'',
    visibility:''
  }

 
  visibilityFrom(){

 
    // this.Ssection.updateVisibility(this.visibilityModel).subscribe((data)=>{

    //   this.Ssection.section(this.livretId).subscribe((data:any)=>{
    //     this.sections=data;
    //     console.log(this.sections);
    //   })
    
    console.log(this.visibilityModel.id);

}

  




}
