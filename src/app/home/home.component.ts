import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service'; 
import { User, ListUsers } from '../model/user'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDefaultComponent } from '../modal-default/modal-default.component';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private users: ListUsers = new ListUsers();
  
  constructor(private modalService: NgbModal, private api: ApiService) { 
    
    this.getUsers()
    
  }

  getUsers = (pagenumber?: number): void => {    
    this.api.GetUsers(pagenumber)
    .subscribe((response: ListUsers) => 
    {
      this.users.page = response.page;
      this.users.per_page = response.per_page;
      this.users.total = response.total;
      this.users.total_pages = response.total_pages;
      this.users.data = response.data.map(user => {
        return user;
      });      
    });
  }   

  openFormModal = (e: Event, user: User) => {
    e.preventDefault();

    this.api.GetUser(user.id)
    .subscribe((response) => 
    {
      const modalRef = this.modalService.open(ModalDefaultComponent);    
      modalRef.componentInstance.user = response.data; 
    });
  }

  openConfirmDelete = (e: Event, user: User) => {
      e.preventDefault();
      const modalRef = this.modalService.open(ModalConfirmComponent);      
      modalRef.componentInstance.user = user; 
  }

}