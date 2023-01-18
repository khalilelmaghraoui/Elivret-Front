import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivretComponent } from './add-livret/add-livret.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { LivretComponent } from './livret/livret.component';
import { LoginComponent } from './login/login/login.component';
import { SectionQuestionsComponent } from './section-questions/section-questions.component';
import { SectionComponent } from './section/section.component';
import { ViewLivretComponent } from './view-livret/view-livret.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch:'full'
  
  },
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
    path: 'livrets/:id/sections',
    component:ViewLivretComponent,
    
    
  },
  {
    path: 'livrets/:livretId/newSection',
    component:AddSectionComponent,
    
    
  }
  ,
  {
    path: 'questions/:id/:title',
    component: SectionQuestionsComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
