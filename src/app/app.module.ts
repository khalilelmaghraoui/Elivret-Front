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
import { MatIconButton } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LivretComponent,
    AddLivretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatButtonModule,MatMenuModule,MatCardModule,MatListModule,MatTableModule,HttpClientModule,MatButtonModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
