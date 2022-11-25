import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  section={
    title:'',
    elivretid:{
      id:'1'
    },
    personId:'1'
  }

}
