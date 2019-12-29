import { Component, OnInit , Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { UtilitiesService } from '../service/utilities.service'; 
import $ from 'jquery'
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-modal-default',
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.css']
})
export class ModalDefaultComponent {
  
  @Input() user: User; 

  constructor(private activeModal: NgbActiveModal, private utilities: UtilitiesService, private api: ApiService) {
    
  }  

  saveUser = (e: Event): void => { 
    this.api.updateUser(this.utilities.QueryStringToJSON($(e.target).serialize()))
    .toPromise()
    .then(response => {        
        this.activeModal.close();
    });    
   } 
  
}