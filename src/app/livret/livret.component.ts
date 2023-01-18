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

  LId:any;
  elivretId:any;

  elivret={
    id:'',
    title: '',
  }


  elivrets=[
    {
      id: 1,
      title: "livret 1"

    },
    {
      id: 2,
      title: "livret 2"

    },
    {
      id: 3,
      title: "livret 3"

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
