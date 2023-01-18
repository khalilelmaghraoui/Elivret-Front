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
import { AddSectionComponent } from './add-section/add-section.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {MatSelectModule} from '@angular/material/select';
import { SectionQuestionsComponent } from './section-questions/section-questions.component';
import { TakeSectionComponent } from './section/take-section/take-section.component';




@NgModule({
  declarations: [
    AppComponent,
    LivretComponent,
    AddLivretComponent,
    SectionComponent,
    ViewLivretComponent,
    AddSectionComponent,NavbarComponent, SidebarComponent, SectionQuestionsComponent, TakeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatButtonModule,MatMenuModule,MatCardModule,MatListModule,MatSelectModule,
    MatTableModule,HttpClientModule,MatButtonModule,MatInputModule,
    FormsModule,BrowserAnimationsModule,
    MatSnackBarModule,MatToolbarModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
