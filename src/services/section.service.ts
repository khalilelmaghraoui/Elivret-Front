import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService implements OnInit{

  readonly BaseUrl="http://localhost:8080/api/elivret/"
  readonly Get="http://localhost:8080/api/elivret/1/sections"

  sid:any;
  constructor(private http:HttpClient) {

  
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   

   public section(sid:any){
    return this.http.get(`http://localhost:8080/api/elivret/${{sid}}/sections`);
   }

  

}
