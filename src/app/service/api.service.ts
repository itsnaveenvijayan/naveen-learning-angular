import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, ListUsers, Loginresponse } from '../model'; 
import * as url from '../shared/serviceurls';

@Injectable({
  providedIn : "root"
})
export class ApiService {
  options = {
      headers: new HttpHeaders().set('Content-Type','application/json')
  }
  constructor(private http: HttpClient) { }

  getUsers = (pagenumber?: number): Observable<ListUsers> => {
    let param = { page : pagenumber };
    return this.http.get<ListUsers>(url.getUsers,{ params: param } )
  }

  getUser = (id:number): Observable<User> => {
    return this.http.get(url.getUser(id));
  }

  login = (user: User): Observable<Loginresponse> => {    
    return this.http.post<Loginresponse>(url.signIn,JSON.stringify(user),this.options);
  }

  deleteUser = (id:number): Observable<any> => {
    return this.http.delete(url.deleteUser(id));
  }

  updateUser = (user: User): Observable<User> => { 
  return this.http.patch<User>(url.updateUser, user, this.options);    
  }
}