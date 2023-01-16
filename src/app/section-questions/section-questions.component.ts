import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
  formFields: any[] = [];

  myForm: FormGroup;
  questionForm :any;

  
  

  constructor(private route:ActivatedRoute  , private qservice:QuestionService,private formBuilder: FormBuilder
    ){
    this.id=this.route.snapshot.params['id'];
    this.title=this.route.snapshot.params['title'];

    this.myForm = this.formBuilder.group({
      question: ["Sample tett"],
      options: this.formBuilder.array([
        this.formBuilder.group({
          response: ["Response"],
          valid: [false]
        })
      ])
    });

  }

  
  

  ngOnInit():void {

    this.title=this.route.snapshot.params['title'];

    this.id=this.route.snapshot.paramMap.get('id');

    this.qservice.getSectionsQuestions(this.id).subscribe((data:any)=>{
      console.log("hello");
      this.questions=data; 
    })

    
    

    
  }

  
  // getter which simplifies the access via 'this.options' used in the addOption method
  get options() {
    return this.myForm.get("options") as FormArray;
  }

  addOption() {
    this.options.push(
      this.formBuilder.group({
        response: [""],
        valid: [false]
      })
    );
  }

  onSubmit(questionData :any) {
    // this.examSimulatorService.addQuestion(questionData);
    this.questionForm.reset();
  }

}
      

  
  



