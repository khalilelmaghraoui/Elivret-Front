import { Component, OnInit } from '@angular/core';
import { LivretServiceService } from 'src/services/livret-service.service';

@Component({
  selector: 'app-add-livret',
  templateUrl: './add-livret.component.html',
  styleUrls: ['./add-livret.component.css']
})
export class AddLivretComponent implements OnInit {
 

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

  constructor(private livret:LivretServiceService){}

  ngOnInit(): void {
    this.livret.livrets().subscribe((data:any)=>{
      this.elivrets=data;
      console.log(this.elivrets);
    })
  }


}
