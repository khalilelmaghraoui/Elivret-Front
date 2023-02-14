import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/services/section.service';
import { LivretServiceService } from 'src/services/livret-service.service';

@Component({
  selector: 'app-take-section',
  templateUrl: './take-section.component.html',
  styleUrls: ['./take-section.component.css']
})
export class TakeSectionComponent {
  selected = 'option2';
  i=1;

  sectionId: any
  token:any


  LId:any;
  elivretId:any;

  elivret={
    id:'',
    title: '',
  }


  elivrets=[
    {
      id: 1,
      title: "livret 1"

    },
    {
      id: 2,
      title: "livret 2"

    },
    {
      id: 3,
      title: "livret 3"

    }
  ];


  section={
    id:'',
    title: '',
    personType:'',
    visibility:'true'
  }

  constructor(private elivretService:LivretServiceService,private route:ActivatedRoute){
    this.sectionId= this.route.snapshot.paramMap.get('id');
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.token = params['token']
      })

    console.log(this.token);
    
  }

  ngOnInit(): void {

    this.elivretService.livretToTake(this.sectionId).subscribe((data:any)=>{
      this.elivrets=data;
      console.log(this.elivret);
    })
  }





  

}
