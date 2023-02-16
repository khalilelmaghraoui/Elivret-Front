import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{

  showForm1: boolean = false;
  showForm2: boolean = false;

  onFormSelectionChange(event: any) {
    const formSelected = event.value;
    this.showForm1 = formSelected === 'form1';
    this.showForm2 = formSelected === 'form2';
  }
  
  showForm11() {
    this.showForm1 = true;
    this.showForm2 = false;
  }
  
  showForm22() {
    this.showForm1 = false;
    this.showForm2 = true;
  }
  

  questionForm;
  arrayOptions:any;

  isDisabled = false;

  

  id;
  title;
  
  question={
    id:'',
    content:"",
    type:"text",
    options:[]
  }

  questions=[
    {
      id:1,
      content:"question 1",
      type:'text',
      options:[]

    },{
      id:2,
      content:"question 1",
      type:"text",
      options:[]

    }
  ];

  
  constructor(private  questionService:QuestionService,private route:ActivatedRoute,private formBuilder: FormBuilder){
    this.id=this.route.snapshot.params['id'];
    this.title=this.route.snapshot.params['title'];


    this.questionForm = this.formBuilder.group({
      content: "",
      type:"multichoice",
      options: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    this.questionService.getQuestions(this.id).subscribe((data:any)=>{
      this.questions=data;
      console.log(this.questions);

    })
        this.arrayOptions = [];

    this.addOption();
  }

  onSubmit(questionData:any) {
    console.log(questionData);
  }
 

  addOption() {
    const control = <FormArray>this.questionForm.get("options");
    const newGroup = this.formBuilder.group({
      option: "",
    });
    control.push(newGroup);
    this.arrayOptions.push(this.questionForm.controls.options.value);
  }
  
 
  formSubmit(){
    this.questionService.addQuestion(this.id,this.question).subscribe((data)=>{
      this.question.content='';
      this.questionService.getQuestions(this.id).subscribe((data:any)=>{
         this.questions=data;
        console.log(this.questions);
  
      })
    })

  }    
  formSubmit2(formData:any){
    const questionData = {
      content: formData.content,
      type:formData.type="multichoice",
      options: formData.options.map((option: any) => option.option)
    };
    this.questionService.addQuestion(this.id,questionData).subscribe((data)=>{
      this.question.content='';
      this.question.options=[];
      this.questionService.getQuestions(this.id).subscribe((data:any)=>{
      this.questions=data;
      console.log(this.questions);
  
      })
    })



  } 

  modifyQuestion(question:any){

    question.content = prompt('Enter new title for question');
    this.questionService.modifyQuestion(this.id,question.id,question).subscribe((data)=>{
      console.log(data);

    })


  }

  showField!: null;
updateText!: string;
showUpdateField(question:any) {
  this.showField = question.id;
  this.updateText = question.content;
}

updateQuestion(question:any) {

  question.content = this.updateText;
  console.log(question.content)
  this.questionService.modifyQuestion(this.id,question.id,question.content).subscribe((data)=>{
    console.log(data);
  })

  this.showField = null;

}
deleteQuestion(question:any) {
  this.questionService.deleteQuestion(this.id,question.id).subscribe((data)=>{
    this.questionService.getQuestions(this.id).subscribe((data:any)=>{
      this.questions=data;
     console.log(this.questions);

   })
  }) 
  this.showField = null;

}

if(){
  console.log("hello");
}

}
