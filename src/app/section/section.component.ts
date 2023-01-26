import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/services/section.service';
// Importing forms module
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivretServiceService } from 'src/services/livret-service.service';
import { Router } from '@angular/router';
   

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit{
  livretId: any;


  isAdmin():boolean{
    console.log(localStorage.getItem("role"));
    if(localStorage.getItem("role") == "ROLE_ADMIN"){
      return true ;
    }
      return false;
  }
  admin:boolean = this.isAdmin();

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

  sectionData = {
    title:'',
    personType:'',
    id:'',
    visibility:''
  };



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

  sectionId:any;

  ngOnInit(): void {
    this.sectionId= this.route.snapshot.paramMap.get('sectionId');
    this.Ssection.getSectionById(this.sectionId).subscribe((data:any)=>{
      this.sectionData=data;
    })
  }
  
  constructor(private Ssection:SectionService, private livretService:LivretServiceService,private route:ActivatedRoute,  private router:Router){
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
          this.Ssection.getSectionById(this.sectionId).subscribe((data:any)=>{
            this.sectionData=data;
          })
        })
      }
  }

  isUpdateFillByForm= false;
  
  formUpdateFilledBy(){
    this.Ssection.updatePersonType(this.sectionData.id, this.sectionData.personType).subscribe((data:any)=>{
      this.Ssection.getSectionById(this.sectionId).subscribe((data:any)=>{
        this.sectionData=data;
        this.isUpdateFillByForm = false;
      })
    })
  }

  


 
visibilityFrom(event: any){
    this.Ssection.updateVisibility(this.sectionData).subscribe((data)=>{})
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
    this.router.navigate(["/livrets/"+this.livret.id+"/sections"]);
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
   this.Ssection.updateSection(this.sectionData.id, this.sectionData.title).subscribe((data:any)=>{
     this.Ssection.section(this.livretId).subscribe((data:any)=>{
      this.sections=data;
      this.isUpdateForm = false;
    })
   })
}
}
