import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User, ListUsers } from '../shared/user';
import { QueryparamsService } from '../service/queryparams.service'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDefaultComponent } from '../modal-default/modal-default.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private users: ListUsers = new ListUsers();
  
  constructor(private http: HttpClient, private queryParam: QueryparamsService,private modalService: NgbModal) { 
    
    this.getUsers()
    
  }

  public getUsers(pagenumber?: number): ListUsers
  {
    
    const url = 'https://reqres.in/api/users';

    let param = { page : pagenumber };
    

    return this.http.get<ListUsers>(url,{ params: param } )
    .subscribe((response: ListUsers) => 
    {
      this.users.page = response.page;
      this.users.per_page = response.per_page;
      this.users.total = response.total;
      this.users.total_pages = response.total_pages;
      this.users.data = response.data.map(user => {
        return user;
      });
      console.log(this.users);      
      
    });
  }

   getUser = (id:number): Observable<any> => {
    
    const url = `https://reqres.in/api/users/${id}`;       

    return this.http.get(url);
    
   }

  openFormModal(e: Event, user: User) {
    e.preventDefault();

    this.getUser(user.id).subscribe((response) => 
    {
      const modalRef = this.modalService.open(ModalDefaultComponent);
    
      modalRef.componentInstance.user = response.data; 

      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    });

    
}

}