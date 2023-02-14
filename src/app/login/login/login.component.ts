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

  data={
    token:'',
    role:'',
    id:''
  }

  username:any;
  password:any;


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this.password = params['password'];
      if(this.username && this.password){
        this.loginDetails.userName = this.username;
        this.loginDetails.password = this.password;
        this.loginForm()
      }
    });
  }
  constructor(private authService:AuthService,private route:ActivatedRoute, private router:Router){
      
    
  }


  loginForm(){
    if(this.loginDetails.userName && this.loginDetails.password){
        this.authService.login(this.loginDetails).subscribe((data:any)=>{
          console.log(data);
          //this.data = data;
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", data.role);
          localStorage.setItem("personId", data.id);
          this.router.navigate(['livrets']);
      })
    }
    
  }





}
