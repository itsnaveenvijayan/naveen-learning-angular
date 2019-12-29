import { Component } from '@angular/core';
import { User } from '../model/user';
import { UtilitiesService } from '../service/utilities.service'; 
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
  user: User;

  constructor(private utilities: UtilitiesService,private router: Router, private api: ApiService) { 
    this.user = {
        email : utilities.GetQueryString('email') || "eve.holt@reqres.in",
        password : utilities.GetQueryString('email') || "eve.holt@reqres.in"
      }
  }

  login = () => {
    this.api.login(this.user)
    .toPromise()
      .then(
        (res) => {
          this.router.navigate(['/home']);
        }, 
        (error) => {
          alert(error.error.error);
        }
      );
  }
}