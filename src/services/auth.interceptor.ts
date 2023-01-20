import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router) {};

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.get("skip")){
      return next.handle(request);
    }

    const  token = localStorage.getItem("token");

    if(token){
      let clone = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(clone);
      
    } else {
        this.router.navigate(['login']);
    }

    return next.handle(request);
   
  }

  addAuthToken(request: HttpRequest<any>) {
 
  }
}