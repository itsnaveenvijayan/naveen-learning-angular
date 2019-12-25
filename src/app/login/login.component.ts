import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { QueryparamsService } from '../service/queryparams.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
  user: User;

  constructor(private httpClient: HttpClient, private queryParam: QueryparamsService,private router: Router) { 
    this.user = {
        email : queryParam.Get('email') || "eve.holt@reqres.in",
        password : queryParam.Get('email') || "eve.holt@reqres.in"
      }
  }

  login = () => {
    //alert(event.target.email.value);    
    let options = {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }

    let apiURL = `https://reqres.in/api/login`;

    let promise = new Promise((resolve, reject) => {
    
    this.httpClient.post(apiURL,JSON.stringify(this.user),options)
      .toPromise()
      .then(
        (res) => { // Success
          console.log(res);
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