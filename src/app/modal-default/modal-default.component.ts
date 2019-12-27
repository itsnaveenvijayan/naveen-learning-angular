import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-default',
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.css']
})
export class ModalDefaultComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
  }

}