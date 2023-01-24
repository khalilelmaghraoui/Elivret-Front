import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivretServiceService } from 'src/services/livret-service.service';



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

  elivret={
    id:'',
    title: '',
  }


  elivrets=[
    {
      id: 1,
      title: "livret 1",
      person: ""
    },
    {
      id: 2,
      title: "livret 2",
      person: ""

    },
    {
      id: 3,
      title: "livret 3",
      persons: [
        {
          email:"",
          personType:""
        }
      ]
    }
  ];
  constructor(private livret:LivretServiceService,private route: ActivatedRoute){
    // this.LId=this.route.snapshot.paramMap.get('id');

    

  }
  ngOnInit(): void {
    this.LId= this.route.snapshot.params['id'];
    this.livret.livrets().subscribe((data:any)=>{
      this.elivrets=data;
    })
  }

  deleteLivret(id:number){

    this.livret.deleteLivret(id).subscribe((data:any)=>{
      this.livret.livrets().subscribe((data:any)=>{
        this.elivrets=data;
        console.log(this.elivrets);
  
      })

    })
  }
  formSubmit(){
    this.livret.addLivret(this.elivret).subscribe((data)=>{
      this.elivret.title='';
      this.livret.livrets().subscribe((data:any)=>{
        this.elivrets=data;
  
      })
    })

  }

  person ={
    email:'',
    personType:'',
    userName:'',
  }
  
  inviteForm(event: any){
    let index = event.target.index.value;
    let target = this.elivrets[index];
  
    this.person.userName = this.person.email.toLowerCase();
    this.person.email = this.person.email.toLowerCase();
    
    if(this.person.personType && this.person.email){
      this.livret.invite(target.id,this.person).subscribe((data)=>{
        console.log("mario");
      })
    }
    

  }
  
  

}
