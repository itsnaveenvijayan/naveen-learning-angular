import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/user';
import { QueryparamsService } from '../service/queryparams.service'; 
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {

  private user: User;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private queryParam: QueryparamsService,private router: Router) { 
      this.user = {
        email : queryParam.Get('email')
      }
  }

    register = () => {
    //alert(event.target.email.value);    
    let options = {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }

    let apiURL = `https://reqres.in/api/register`;

    let promise = new Promise((resolve, reject) => {
    
    this.httpClient.post(apiURL,JSON.stringify(this.user),options)
      .toPromise()
      .then(
        (res) => { // Success
          console.log(res);
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

