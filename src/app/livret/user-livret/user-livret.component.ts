import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivretServiceService } from 'src/services/livret-service.service';



@Component({
  selector: 'app-user-livret',
  templateUrl: './user-livret.component.html',
  styleUrls: ['./user-livret.component.css']
})
export class UserLivretComponent {
  i=1;

  LId:any;
  elivretId:any;

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
      console.log(this.elivrets);

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
        console.log(this.elivrets);
  
      })
    })

  }

 
}
