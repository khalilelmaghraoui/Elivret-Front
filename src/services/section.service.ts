import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService implements OnInit{
 
  

  readonly BaseUrl="http://localhost:8080/api/elivret/"
  readonly Get="http://localhost:8080/api/elivret/1/sections"

  
  constructor(private http:HttpClient) {


    
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   

   public section(sid:any){
    return this.http.get(this.BaseUrl+sid+"/sections");
   }


  public addSection(livretId:any, section: any){
    return this.http.post(this.BaseUrl + livretId + "/sections/add",section);
  }

  public updateVisibility(section: any) {
    return this.http.post(this.BaseUrl + "sections/" + section.id +  "updateVisibility",section);
  }

  

}
