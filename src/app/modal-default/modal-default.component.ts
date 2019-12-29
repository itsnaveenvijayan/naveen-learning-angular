import { Component, OnInit , Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilitiesService } from '../service/utilities.service'; 
import $ from 'jquery'
import * as url from '../shared/serviceurls';

@Component({
  selector: 'app-modal-default',
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.css']
})
export class ModalDefaultComponent implements OnInit  {
  
  @Input() user: User; 

  constructor(private activeModal: NgbActiveModal, public http: HttpClient,private utilities: UtilitiesService) {
    
  }  

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(){

  }

  saveUser = (e: Event): any => {
 
    let options = {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }
    return this.http.patch<Observable<any>>(url.updateUser,this.utilities.QueryStringToJSON($(e.target).serialize()),options)
    .subscribe(response => {        
        this.activeModal.close();
    });
    
   }  
  
}