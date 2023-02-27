import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/services/section.service';
// Importing forms module
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivretServiceService } from 'src/services/livret-service.service';
   
   

@Component({
  selector: 'app-view-livret',
  templateUrl: './view-livret.component.html',
  styleUrls: ['./view-livret.component.css']
})

export class ViewLivretComponent implements OnInit{
  
  livretId: any;


  isAdmin():boolean{
    console.log(localStorage.getItem("role"));
    if(localStorage.getItem("role") == "ROLE_ADMIN"){
      return true ;
    }
      return false;
  }
  admin:boolean = this.isAdmin();

  isCanUpdateVisiblity():boolean{
    let role = localStorage.getItem("role");
    if( role == ("ROLE_ADMIN") || role == ("Tuteur") ){
      console.log("can visibilty " + localStorage.getItem("role"));
      return true ;
    }
      return false;
  }
  canUpdateVisiblity:boolean = this.isCanUpdateVisiblity();
 

  selected = 'option2';
  FilledByselected = 'option2';

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

  livret={
    id:'',
    title: '',
  }


  ngOnInit(): void {

    this.Ssection.section(this.livretId).subscribe((data:any)=>{
      this.sections=data;
      console.log(this.sections);
    })
  }
  
  constructor(private Ssection:SectionService, private livretService:LivretServiceService,private route:ActivatedRoute){
    this.livretId= this.route.snapshot.paramMap.get('id');
    this.livretService.getLivretById(this.livretId).subscribe((data:any)=>{
      this.livret=data;
    })
   console.log(this.livretId);
    
  }

  

    formSubmit(){
      if(this.section.title && this.section.personType){
        this.Ssection.addSection(this.livretId,this.section).subscribe((data)=>{
          this.section.title='';
          this.Ssection.section(this.livretId).subscribe((data:any)=>{
            this.sections=data;
            console.log(this.sections);
          })
        })
      }
  }

  isUpdateFillByForm= false;
  
  formUpdateFilledBy(){
    
  }

  


 
visibilityFrom(event: any){

    let index = event.target.index.value;
    let target = this.sections[index];
    this.Ssection.updateVisibility(target).subscribe((data)=>{})
}

person ={
  email:'',
  personType:'',
  userName:'',
}

inviteForm(event: any){
  let index = event.target.index.value;
  let target = this.sections[index];

  this.person.personType = target.personType.toLowerCase();
  this.person.userName = this.person.email.toLowerCase();
  this.person.email = this.person.email.toLowerCase();

  this.Ssection.invite(target.id,this.person).subscribe((data)=>{})
}

deleteSection(id:any){
  console.log(this.sections);

  this.Ssection.deleteSection(id).subscribe((data:any)=>{
    this.Ssection.section(this.livretId).subscribe((data:any)=>{
      this.sections=data;
      console.log(this.sections);
    })
  })
}

popup = false;

showPopup(state:any){
  this.popup = state
}


isUpdateForm = false;
isUpdate(boolean:boolean){
  if (this.isUpdateForm == false){
    this.isUpdateForm = true; 
    this.isUpdateFillByForm = true;
  } else {
    this.isUpdateForm = false; 
    this.isUpdateFillByForm = false;
  }
}


updateSection(event: any){
  let index = event.target.index.value;
  let target = this.sections[index];

  let title = target.title;

  console.log(title);

   this.Ssection.updateSection(target.id, title).subscribe((data:any)=>{
     this.Ssection.section(this.livretId).subscribe((data:any)=>{
      this.sections=data;
      this.isUpdateForm = false;
    })
   })
}



}
