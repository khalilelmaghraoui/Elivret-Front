import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDetails= {
    userName:'',
    password: ''
  }

  constructor(private authService:AuthService,private route:ActivatedRoute, private router:Router){
  }

  loginForm(){
    if(this.loginDetails.userName && this.loginDetails.password){
        this.authService.login(this.loginDetails).subscribe((data)=>{
          console.log(data);
          localStorage.setItem("token", data);
          this.router.navigate(['livrets']);
      })
    }
    
  }





}
