import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/services/section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit{
  


  sId:any;

  constructor(private sectionService:SectionService,private route: ActivatedRoute){
    this.sId= this.route.snapshot.paramMap.get('id');


  }
  ngOnInit(): void {


   this.sectionService.section(this.sId).subscribe((data:any)=>{
    console.log(this.sId);

  })
  }
}
