import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LivretServiceService {
  readonly BaseUrl="http://localhost:8080/api/"

  constructor(private http:HttpClient) { }
 
  public livrets(){
      return this.http.get(this.BaseUrl+"all");
  }
}
