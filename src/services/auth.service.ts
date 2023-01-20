import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BaseUrl = "http://localhost:8080/secu-users";


  constructor(private http:HttpClient) { }

  public login(loginDetails:any){
    return this.http.post("http://localhost:8080/secu-users/login", loginDetails, {responseType: 'text',headers:{skip:'true'}});
  }


}
