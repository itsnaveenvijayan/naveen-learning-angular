import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListUsers } from '../shared/user';
import { User } from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private users: ListUsers = new ListUsers();

  constructor(private http: HttpClient) { 
    
    this.getUsers().subscribe((response: ListUsers) => 
    {
      this.users = response;
      console.log(this.users);
    });
    
  }

  public getUsers(): Observable<ListUsers> 
  {
    const url = 'https://reqres.in/api/users';
 
    return this.http.get<ListUsers>(url);
  }

  ngOnInit() {
  }

}