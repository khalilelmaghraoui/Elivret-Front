import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{
  id;
  title;
  
  question={
    id:'',
    content:"",
    type:"text"
  }

  questions=[
    {
      id:1,
      content:"question 1",
      type:'text'

    },{
      id:2,
      content:"question 1",
      type:"text"

    }
  ];

  
  constructor(private  questionService:QuestionService,private route:ActivatedRoute){
    this.id=this.route.snapshot.params['id'];
    this.title=this.route.snapshot.params['title'];


  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.questionService.getQuestions(this.id).subscribe((data:any)=>{
      this.questions=data;
      console.log(this.questions);

    })

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

}
