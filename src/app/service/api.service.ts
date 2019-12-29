import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, ListUsers, Loginresponse } from '../model'; 
import * as url from '../shared/serviceurls';

@Injectable({
  providedIn : "root"
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetUsers = (pagenumber?: number): Observable<ListUsers> => {
    let param = { page : pagenumber };
    return this.http.get<ListUsers>(url.getUsers,{ params: param } )
  }  

  GetUser = (id:number): Observable<any> => {     

    return this.http.get(url.getUser(id));
    
  }

  Login = (user: User): Observable<Loginresponse> => {
    let options = {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }
    return this.http.post<Loginresponse>(url.signIn,JSON.stringify(user),options)
  }
}