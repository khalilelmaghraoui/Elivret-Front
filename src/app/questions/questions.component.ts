import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/services/question.service';
import { SectionService } from 'src/services/section.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{

  showForm1: boolean = false;
  showForm2: boolean = false;
  responseForm: FormGroup;
  toppings = this.formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  public myControl = new FormControl();

  section:any;

  isAdmin():boolean{
    if(localStorage.getItem("role") == "ROLE_ADMIN"){
      return true ;
    }
      return false;
  }
  admin:boolean = this.isAdmin();

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
  updateOptions2: string[] = [];


  isDisabled = false;
  

  id;
  title;
  
  question={
    id:'',
    content:"",
    type:"text",
    options:[],
    answer:""

  }

  questions=[
    {
      id:1,
      content:"question 1",
      type:'text',
      options:[ ],
      answer:""

    },{
      id:2,
      content:"question 1",
      type:"text",
      options:[
        

      ],
      answer:""

    }
  ];


ngOnInit() {
  this.id=this.route.snapshot.params['id'];

 
      this.arrayOptions = [];

  this.addOption();
  this.Ssection.getSectionById(this.id).subscribe((data:any)=>{
    this.section = data;
    console.log(data)
  })

  this.questionService.getQuestions(this.id).subscribe((data:any)=>{
    this.questions=data;
    console.log(this.questions);
    this.answersCheck();
  })
}
  
  constructor(private Ssection:SectionService, private  questionService:QuestionService,private route:ActivatedRoute,
    private formBuilder: FormBuilder,private dialog: MatDialog,private dialogRef: MatDialogRef<QuestionsComponent>
    ){
    this.id=this.route.snapshot.params['id'];
    this.title=this.route.snapshot.params['title'];

    
    this.questionService.getQuestions(this.id).subscribe((data:any)=>{
      this.questions=data;
      console.log(this.questions);
  
    })
    this.responseForm = this.formBuilder.group({
    
      questions: this.formBuilder.array([
        { id: "", content: "", type: "", options: [], answer: "" }
        
      ])
     
    });


    this.questionForm = this.formBuilder.group({
      // id:"",
      content: "",
      type:"multichoice",
      options: this.formBuilder.array([]),
      // answer:""
    });
  }
 





  get questionss() {
    return this.responseForm.get('questions') as FormArray;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
 

  addOption() {
    const control = <FormArray>this.questionForm.get("options");
    const newGroup = this.formBuilder.group({
      option: "",
    });
    control.push(newGroup);
    this.arrayOptions.push(this.questionForm.controls.options.value);
  }
  
  validQuestion = (email:any) => {
    return String(email)
      .toLowerCase()
      .match(
        /^\S.*\S$/
        );
  };
 
  formSubmit(){
    let validQuestion = this.validQuestion(this.question.content);
    if(validQuestion){
    this.questionService.addQuestion(this.id,this.question).subscribe((data)=>{
      this.question.content='';
      this.showForm1 = false;
      this.showForm2 = false;
      this.questionService.getQuestions(this.id).subscribe((data:any)=>{
         this.questions=data;
        console.log(this.questions);
        this.answersCheck();

      })
    })}

  }  
  formSubmit2(formData:any){
    const questionData = {
      content: formData.content,
      type:formData.type="multichoice",
      options: formData.options.map((option: any) => option.option)
    };
    let validQuestion1 = this.validQuestion(questionData.content);
    let validQuestion2 = this.validQuestion(questionData.options);



    if(validQuestion1 && validQuestion2){
    this.questionService.addQuestion(this.id,questionData).subscribe((data)=>{
      this.question.content='';
      this.question.options=[];
      this.questionForm.reset();
      this.showForm1 = false;
      this.showForm2 = false;

      this.questionService.getQuestions(this.id).subscribe((data:any)=>{
      this.questions=data;
      console.log(this.questions);
      this.answersCheck();

      })
    })}



  } 



  showField!: null;
  updateText!: string;
showUpdateField(question:any) {
  this.showField = question.id;
  this.updateText = question.content;
  this.updateOptions2 = [...question.options];

}

updateQuestion(question:any,options:any) {

  question.content = this.updateText;
  question.options = options;
   
  console.log(question.content)
  console.log(question.options)
  // console.log(jsonString)
  this.questionService.modifyQuestion2(this.id,question.id,question).subscribe((data)=>{
    console.log(data);
  })

  this.showField = null;

}
updateQuestion2(question:any) {

  question.content = this.updateText;
  
   
  console.log(question.content)
  // console.log(jsonString)
  this.questionService.modifyQuestion(this.id,question.id,question.content).subscribe((data)=>{
    this.showForm1 = false;
    this.showForm2 = false;
    console.log(data);
  })

  this.showField = null;

}
deleteQuestion(question:any) {
  this.questionService.deleteQuestion(this.id,question.id).subscribe((data)=>{
    this.questionService.getQuestions(this.id).subscribe((data:any)=>{
      this.questions=data;
     console.log(this.questions);
     this.answersCheck();
   })
  }) 
  this.showField = null;

}
onOptionSelected(qIndex: number, oIndex: number) {
  this.questions[qIndex].answer = this.questions[qIndex].options[oIndex];
  console.log(this.questions[qIndex]);
  console.log(`Question ${qIndex} option ${oIndex} selected`);
}

formLocked = true;

stillquestion = 0;

answersCheck(){
  for (let question of this.questions) {
    console.log(question.answer);
    if(question.answer){
      this.stillquestion++;
    }
  }

  console.log(`rol`,this.section.personType,localStorage.getItem("role"));

  if(localStorage.getItem("role") == this.section.personType ){
    if(this.questions.length != this.stillquestion ){
      this.formLocked = false;
    }else{
      this.formLocked = true;
      this.alreadSentMessage = 'This from is completed !'
    }
  }else{
    this.formLocked = true;
    this.wrongRoleMessage = 'Info: You are not supposed to answer to this form but you can check the responses !'
  }
}

fillFormMessage = '';
successMessage = '';
wrongRoleMessage='';
alreadSentMessage='';

onResponseSubmit() {
  let nmbrofresponses = 0;
  for (let question of this.questions) {
    if(question.answer){
      nmbrofresponses++;
    }
  }

  if(nmbrofresponses == this.questions.length){
    // Lock the form
    for (let question of this.questions) {
      this.questionService.answer(this.id, question.id, question.answer).subscribe((data) => {
        console.log('Question ' + question.id + ' answered');
        this.questionService.getQuestions(question.id).subscribe((data:any)=>{
            console.log(this.questions);
            this.formLocked = true;
          })
          this.formLocked = true;
          this.fillFormMessage = '';
          this.successMessage = 'Thank you for your responses !';
      });
    }
  }else{
    this.fillFormMessage = "Please complete the form !";
  }

}





}
