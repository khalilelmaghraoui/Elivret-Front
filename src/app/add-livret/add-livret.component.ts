import { Component, OnInit } from '@angular/core';
import { LivretServiceService } from 'src/services/livret-service.service';

@Component({
  selector: 'app-add-livret',
  templateUrl: './add-livret.component.html',
  styleUrls: ['./add-livret.component.css']
})
export class AddLivretComponent implements OnInit {
 

  elivret={
    id:'',
    title: '',
  }

  

  constructor(private Selivret:LivretServiceService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  formSubmit(){
    this.Selivret.addLivret(this.elivret).subscribe((data)=>{
      this.elivret.title='';
    })

  }


}
