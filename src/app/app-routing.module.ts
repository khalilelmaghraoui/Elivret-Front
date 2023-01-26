import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivretComponent } from './add-livret/add-livret.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { LivretComponent } from './livret/livret.component';
import { LoginComponent } from './login/login/login.component';
import { SectionQuestionsComponent } from './section-questions/section-questions.component';
import { SectionComponent } from './section/section.component';
import { ViewLivretComponent } from './view-livret/view-livret.component';
import { TakeSectionComponent } from './section/take-section/take-section.component'; 
import { UserLivretComponent } from './livret/user-livret/user-livret.component';
import { UserViewLivretComponent } from './view-livret/user-view-livret/user-view-livret.component';
import { LivretsListComponent } from './livrets-list/livrets-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch:'full'
  
  },
  {
    path: 'livrets/:id',
    component: LivretComponent,
  
  },
  {
    path: 'user/livret',
    component: UserLivretComponent,
  },
  {
    path: 'livrets',
    component: LivretsListComponent
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
    path: 'user/livrets/:id/sections',
    component:UserViewLivretComponent,
  },
  {
    path: 'livrets/:livretId/newSection',
    component:AddSectionComponent,
    
    
  }
  ,
  {
    path: 'questions/:id/:title',
    component: SectionQuestionsComponent
  },
  {
    path: 'elivret/:id/take',
    component: TakeSectionComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
