import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
 
  constructor(private httpClient: HttpClient) { }

  login = (event) => {
    //alert(event.target.email.value);

    let body = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    let options = {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }

    let apiURL = `https://reqres.in/api/login`;

    let promise = new Promise((resolve, reject) => {
    
    this.httpClient.post(apiURL,JSON.stringify(body),options)
      .toPromise()
      .then(
        (res) => { // Success
          console.log(res);
          //resolve();
        }, 
        (error) => {
          alert(error.error.error);
        }
      );
  });

   
  return promise;
 


  }

  ngOnInit() {
  }

}