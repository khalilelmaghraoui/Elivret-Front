import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BaseUrl = "http://localhost:8080/secu-users";


  constructor(private http:HttpClient, private router:Router) { }

  public login(loginDetails:any){
    return this.http.post("http://localhost:8080/secu-users/login", loginDetails, {responseType: 'json',headers:{skip:'true'}});
  }

  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("personId");
    localStorage.removeItem("personEmail");
  
    this.router.navigate(['login']);
  }


}
