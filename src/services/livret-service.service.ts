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
  public getLivretById(livretId:any){
    return this.http.get(this.BaseUrl+"elivret/"+livretId);
}

public getPersonLivrets(peronsId:any){
  return this.http.get(this.BaseUrl+"elivret/person/"+peronsId);
}


  

  //add livrets

  public addLivret(elivret: any){

    return this.http.post(this.BaseUrl+"add",elivret);

  }

  public updateLivret(livretId:any, title:any){
    return this.http.put(this.BaseUrl+"elivret/"+livretId,title);
  }

  

  deleteLivret(livretId:any){
    return this.http.delete(this.BaseUrl+"elivret/"+livretId)
  }

  public invite(livretId:any, person:any){
    return this.http.post(this.BaseUrl + "elivret/" + livretId +  "/invite",person,{responseType: 'text'});
  }

  public livretToTake(sid:any){
    return this.http.get(this.BaseUrl+"elivret/"+sid+"/take");
   }
}
