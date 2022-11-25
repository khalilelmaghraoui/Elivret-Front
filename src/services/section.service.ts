import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  readonly BaseUrl="http://localhost:8080/api/elivret/"
  readonly Get="http://localhost:8080/api/elivret/1/sections"


  constructor(private http:HttpClient) {

  
   }
   

   public section(){
    return this.http.get("http://localhost:8080/api/elivret/1/sections");
   }
}
