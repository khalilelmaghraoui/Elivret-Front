import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/services/question.service';
import { Question } from './Question';

@Component({
  selector: 'app-section-questions',
  templateUrl: './section-questions.component.html',
  styleUrls: ['./section-questions.component.css']
})
export class SectionQuestionsComponent implements OnInit {

  id;
  title;

   questionForm;
  
  arrayOptions:any;

  form = new FormGroup({});
  TextQuestions!: Question[];


  quizForm  : FormGroup;
  questions=[{
     
    
    content: "",
    type: "text",
  



  }];
  


  constructor(private route:ActivatedRoute  , private qservice:QuestionService,private formBuilder: FormBuilder
    ){
    this.id=this.route.snapshot.params['id'];
    this.title=this.route.snapshot.params['title'];

    this.questionForm = this.formBuilder.group({
      description: "",
      options: this.formBuilder.array([])
    });
    

    this.quizForm = this.formBuilder.group({
              
      questions : this.formBuilder.array([

        this.formBuilder.group({
          
          content: '',
          type: 'text',
         
        })
      ])
    });
  }

 
  get Gquestions() {
    return this.quizForm.get("questions") as FormArray;
  }

  addQuestion() {
   this.Gquestions.push(
    this.formBuilder.group({
      
      content:[""],
      type:"text",
     
    })
   )
  }
  deleteQuestion(i:number){
    this.Gquestions.removeAt(i);
  }
 
  deleteQuestion2(questionId: number) {

    this.qservice.deleteQuestion(this.id,questionId).subscribe((data)=>{
      console.log("item deleted")
      this.qservice.getQuestions(this.id).subscribe((data:any)=>{
        this.TextQuestions=data;

       
      })
    })
    // this.TextQuestions.splice(index, 1);
    // this.form.removeControl(question.content);
  }

  addOption() {
    const control = <FormArray>this.questionForm.get("options");
    const newGroup = this.formBuilder.group({
      response: "",
      valid: ""
    });
    control.push(newGroup);
    this.arrayOptions.push(this.questionForm.controls.options.value);
  }

  ngOnInit():void {

    this.title=this.route.snapshot.params['title'];
    this.id=this.route.snapshot.paramMap.get('id');
    
    this.arrayOptions = [];
    // this.addOption();

    this.qservice.getSectionsQuestions(this.id).subscribe((data:any)=>{
      console.log("hello");
      // this.questions=data; 


    })

    this.qservice.getQuestions(this.id).subscribe((data:any)=>{
      this.TextQuestions=data;
     
    })

   
  }
  reset() {
    this.quizForm.reset();
  }

  submitQuestionsForm(){


  //  let questions = this.quizForm.get('question')?.value;
  //   console.log(this.questions);
  let questionss: Question[];
   questionss = this.quizForm.get('questions')?.value;

         console.log(questionss);


    
    this.qservice.addQuestion(this.id,questionss).subscribe((data)=>{
      this.questions=[{content:"",type:"text"}];
      questionss=[{id:1,content:"",type:"text"}];
      this.qservice.getQuestions(this.id).subscribe((data:any)=>{
        this.TextQuestions=data;

       
      })
    }

    
    );
    // console.log(JSON.stringify(this.quizForm.value));

  }
  

}
      

  
  



