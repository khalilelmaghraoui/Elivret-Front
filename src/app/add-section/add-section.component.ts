import { Component } from '@angular/core';
import { SectionService } from 'src/services/section.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent {

  section={
    id:'',
    title: '',
  }

  livretId:any;

  constructor(private sectionService:SectionService, private route:ActivatedRoute){
    this.livretId = this.route.snapshot.paramMap.get('livretId');
    console.log(this.livretId);
  }
  ngOnInit(): void {
    
  }
  


  formSubmit(){
    this.sectionService.addSection(this.livretId,this.section).subscribe((data)=>{
      this.section.title='';
    })

  }


}
