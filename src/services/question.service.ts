import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/section-questions/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  readonly BaseUrl="http://localhost:8080/api/"

  constructor( private http:HttpClient) { }

  public getSectionsQuestions(sectionId:any){
   return this.http.get(this.BaseUrl+"sections/"+sectionId+"/questions");
    
  }

  public addQuestion(sectionId:number,question:any){
    return this.http.post(this.BaseUrl+"sections/"+sectionId+"/questions/add",question);
  }

  public getQuestions(sectionId:number){
    return this.http.get(this.BaseUrl+"sections/"+sectionId+"/questions")

  }

  public deleteQuestion(sectionId:number,questionId:number){

    return this.http.delete(this.BaseUrl+"sections/"+sectionId+"/questions/"+questionId);

  }

  public modifyQuestion(sectionId:number,questionId:number,content:any){
    return this.http.put(this.BaseUrl+"sections/"+sectionId+"/questions/"+questionId,content)

  }


}
