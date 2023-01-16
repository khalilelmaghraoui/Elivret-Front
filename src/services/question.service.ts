import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  readonly BaseUrl="http://localhost:8080/api/"

  constructor( private http:HttpClient) { }

  public getSectionsQuestions(sectionId:any){
   return this.http.get(this.BaseUrl+"sections/"+sectionId+"/questions");
    
  }
}
