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

  elivretId:any;

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
  ngOnInit(): void {
    this.livret.livrets().subscribe((data:any)=>{
      this.elivrets=data;
      console.log(this.elivrets);

    })
  }
  
  constructor(private livret:LivretServiceService,private route: ActivatedRoute){

    

  }

}
