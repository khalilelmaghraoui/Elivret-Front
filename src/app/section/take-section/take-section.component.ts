import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/services/section.service';

@Component({
  selector: 'app-take-section',
  templateUrl: './take-section.component.html',
  styleUrls: ['./take-section.component.css']
})
export class TakeSectionComponent {
  selected = 'option2';

  sectionId: any
  token:any

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

  constructor(private Ssection:SectionService,private route:ActivatedRoute){
    this.sectionId= this.route.snapshot.paramMap.get('id');
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.token = params['token']
      })

    console.log(this.token);
    
  }

  ngOnInit(): void {

    this.Ssection.sectionToTake(this.sectionId,this.token).subscribe((data:any)=>{
      this.sections=data;
      console.log(this.sections);
    })
  }

}
