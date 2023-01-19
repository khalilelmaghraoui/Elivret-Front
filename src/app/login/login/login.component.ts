import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDetails= {
    username:'',
    password: ''
  }

  constructor(private authService:AuthService,private route:ActivatedRoute){
  }

  loginForm(){
    if(this.loginDetails.username && this.loginDetails.password){
      this.authService.login(this.loginDetails).subscribe((data)=>{
      })
    }
    
  }





}
