import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import * as url from '../shared/serviceurls';
import { UtilitiesService } from '../service/utilities.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
  user: User;

  constructor(private httpClient: HttpClient, private utilities: UtilitiesService,private router: Router) { 
    this.user = {
        email : utilities.GetQueryString('email') || "eve.holt@reqres.in",
        password : utilities.GetQueryString('email') || "eve.holt@reqres.in"
      }
  }

  login = () => {    
    let options = {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }
    

    let promise = new Promise((resolve, reject) => {
    
    this.httpClient.post(url.signIn,JSON.stringify(this.user),options)
      .toPromise()
      .then(
        (res) => {
          this.router.navigate(['/home']);
        }, 
        (error) => {
          alert(error.error.error);
        }
      );
    });
   
    return promise;
 
  }

 

}