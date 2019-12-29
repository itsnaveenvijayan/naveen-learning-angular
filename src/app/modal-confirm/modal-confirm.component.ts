import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {
  @Input() user;
  constructor(private modal: NgbActiveModal, private api: ApiService) { }

  ngOnInit() {
  }

  deleteUser(id:number){
    this.api.deleteUser(id)
    .toPromise()
    .then(response => {        
        this.modal.close();
    });
  }
}