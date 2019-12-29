import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UtilitiesService } from '../service/utilities.service'; 
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as url from '../shared/serviceurls';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {

  private user: User;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private utilities: UtilitiesService, private router: Router) { 
      this.user = {
        email : utilities.GetQueryString('email')
      }
  }

    register = () => {   
    let options = {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }

  

    let promise = new Promise((resolve, reject) => {
    
    this.httpClient.post(url.signUp,JSON.stringify(this.user),options)
      .toPromise()
      .then(
        (res) => { // Success          
          this.router.navigate(['']);
        }, 
        (error) => {
          alert(error.error.error);
        }
      );
    });
   
    return promise;
 
  }

}

