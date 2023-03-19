import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LivretServiceService } from 'src/services/livret-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-livret',
  templateUrl: './livret.component.html',
  styleUrls: ['./livret.component.css']
})
export class LivretComponent implements OnInit {

  i=1;

  selected = 'option2';

  LId:any;
  elivretId:any;
  


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

  elivret={
    id:'',
    title: '',
  }

  livretData= {
    id: null,
    title: null,
    person: null,
    persons: [
      {
        email:null,
        personType:null
      }
    ]
  };


  constructor(private livret:LivretServiceService,private route: ActivatedRoute, private router:Router){
    this.elivretId= this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.LId= this.route.snapshot.params['id'];
    this.livret.getLivretById(this.elivretId).subscribe((data:any)=>{
      this.livretData=data;

    })
  }

  deleteLivret(id:any){
    this.livret.deleteLivret(id).subscribe((data:any)=>{
      this.router.navigate(['livrets']);
    })
  }
  formSubmit(){
    this.livret.addLivret(this.elivret).subscribe((data)=>{
      this.elivret.title='';
      this.livret.livrets().subscribe((data:any)=>{
        this.livretData=data;
  
      })
    })

  }

  person = {
    email:'',
    personType:'',
    userName:'',
  }
  
  inviteForm(event: any){
    let index = event.target.index.value;
    let target = this.livretData;
  
    this.person.userName = this.person.email.toLowerCase();
    this.person.email = this.person.email.toLowerCase();

    let validEmail = this.validateEmail(this.person.email);
    
    if(this.person.personType && validEmail){
      this.livret.invite(target.id,this.person).subscribe((data)=>{
        this.livret.getLivretById(this.elivretId).subscribe((data:any)=>{
          this.livretData=data;
          this.person = {
            email:'',
            personType:'',
            userName:'',
          }
        })
      })
    }
  }

   validateEmail = (email:any) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  isUpdateForm = false;
  isUpdate(boolean:boolean){
    this.isUpdateForm = boolean;
  }


  updateLivret(event: any){
    let index = event.target.index.value;
    let target = this.livretData;

    let title = target.title;

    console.log(title);

     this.livret.updateLivret(target.id, title).subscribe((data:any)=>{
        this.livret.getLivretById(this.elivretId).subscribe((data:any)=>{
          this.livretData=data;
          this.isUpdateForm = false;
        })
     })
  }

 
  
  

}
