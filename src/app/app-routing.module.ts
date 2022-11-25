import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivretComponent } from './add-livret/add-livret.component';
import { LivretComponent } from './livret/livret.component';
import { SectionComponent } from './section/section.component';
import { ViewLivretComponent } from './view-livret/view-livret.component';

const routes: Routes = [
  {
    path: 'livrets',
    component: LivretComponent,
  
  },
  {
    path: 'addLivrets',
    component: AddLivretComponent,

  }
  ,
  {
    path: 'livrets/:qid',
    component:ViewLivretComponent,
    children:[
      {
        path:'sections',
        component:SectionComponent,
      }
    ]
    
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
