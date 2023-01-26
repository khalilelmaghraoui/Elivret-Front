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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { LoginComponent } from './login/login/login.component';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import { UserLivretComponent } from './livret/user-livret/user-livret.component';
import { UserViewLivretComponent } from './view-livret/user-view-livret/user-view-livret.component';
import { LivretsListComponent } from './livrets-list/livrets-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LivretComponent,
    AddLivretComponent,
    SectionComponent,
    ViewLivretComponent,
    AddSectionComponent,NavbarComponent, SidebarComponent, SectionQuestionsComponent, LoginComponent,TakeSectionComponent, UserLivretComponent, UserViewLivretComponent, LivretsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatButtonModule,MatMenuModule,MatCardModule,MatListModule,MatSelectModule,
    MatTableModule,HttpClientModule,MatButtonModule,MatInputModule,
    FormsModule,BrowserAnimationsModule,
    MatSnackBarModule,MatToolbarModule,MatIconModule,ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
