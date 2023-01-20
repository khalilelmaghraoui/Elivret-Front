import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LivretServiceService {
  readonly BaseUrl="http://localhost:8080/api/"

  constructor(private http:HttpClient) { }
 
  //show livrets
  public livrets(){
      return this.http.get(this.BaseUrl+"all");
  }

  //add livrets

  public addLivret(elivret: any){

    return this.http.post(this.BaseUrl+"add",elivret);

  }

  deleteLivret(livretId:number){
    return this.http.delete(this.BaseUrl+"elivret/"+livretId)
  }

  public invite(livretId:any, person:any){
    return this.http.post(this.BaseUrl + "elivret/" + livretId +  "/invite",person);
  }

  public livretToTake(sid:any){
    return this.http.get(this.BaseUrl+"elivret/"+sid+"/take");
   }
}
