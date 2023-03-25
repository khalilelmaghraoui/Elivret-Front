import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth:AuthService){}

  email:any;
  role: any;

  ngOnInit() {
    this.email = localStorage.getItem("personEmail");

    if(localStorage.getItem("role") == 'ROLE_ADMIN'){
      this.role = "Admin"
    }else{
      this.role = localStorage.getItem("role")
    }
  }

  logout(){
    this.auth.logout();
  }
}
