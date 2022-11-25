import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivretComponent } from './livret/livret.component';
import { AddLivretComponent } from './add-livret/add-livret.component';
import {MatButtonModule, MatIconAnchor} from '@angular/material/button';
import {matMenuAnimations, MatMenuModule} from '@angular/material/menu';

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list'

import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionComponent } from './section/section.component';
import { ViewLivretComponent } from './view-livret/view-livret.component';


@NgModule({
  declarations: [
    AppComponent,
    LivretComponent,
    AddLivretComponent,
    SectionComponent,
    ViewLivretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatButtonModule,MatMenuModule,MatCardModule,MatListModule,
    MatTableModule,HttpClientModule,MatButtonModule,MatInputModule,FormsModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
