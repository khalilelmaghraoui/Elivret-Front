import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'app-section-questions',
  templateUrl: './section-questions.component.html',
  styleUrls: ['./section-questions.component.css']
})
export class SectionQuestionsComponent implements OnInit {

  id;
  title;
  questions=[];

  

  constructor(private route:ActivatedRoute  , private qservice:QuestionService){
    this.id=this.route.snapshot.params['id'];
    this.title=this.route.snapshot.params['title'];

  }

  ngOnInit():void {

    this.title=this.route.snapshot.params['title'];

    this.id=this.route.snapshot.paramMap.get('id');

    this.qservice.getSectionsQuestions(this.id).subscribe((data:any)=>{
      console.log("hello");
      this.questions=data; 
    })

    

    
  }


}
