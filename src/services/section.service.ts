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

   public getSectionById(sid:any){
    return this.http.get(this.BaseUrl+"sections/"+sid);
   }

  public addSection(livretId:any, section: any){
    return this.http.post(this.BaseUrl + livretId + "/sections/add",section);
  }

  public updateVisibility(section: any) {
    let data:number = (section.visibility == "true" ) ? 1 : 0;  
    return this.http.post(this.BaseUrl + "sections/" + section.id +  "/updateVisibility", data);
  }

  public updateSection(sectionId:any, title: any) {
    return this.http.put(this.BaseUrl + "sections/"+ sectionId, title);
  }

  public updatePersonType(sectionId:any, personType: any) {
    return this.http.put(this.BaseUrl + "sections/"+sectionId+"/updatePersonType", personType);
  }

  

  public deleteSection(sectionId:number){
    return this.http.delete(this.BaseUrl+"sections/"+sectionId)
  }

  public invite(sectionId:any, person:any){
    return this.http.post(this.BaseUrl + "sections/" + sectionId +  "/invite",person);
  }

  public sectionToTake(sid:any,token:any){
    return this.http.get(this.BaseUrl+"sections/"+sid+"/take?token="+token);
   }


}
