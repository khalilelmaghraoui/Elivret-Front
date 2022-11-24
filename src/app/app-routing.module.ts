import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivretComponent } from './add-livret/add-livret.component';
import { LivretComponent } from './livret/livret.component';

const routes: Routes = [
  {
    path: 'livrets',
    component: LivretComponent


  },
  {
    path: 'addLivrets',
    component: AddLivretComponent,
  

  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
