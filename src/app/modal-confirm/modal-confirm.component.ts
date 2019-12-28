import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {
  @Input() user;
  constructor(private modal: NgbActiveModal, private http: HttpClient) { }

  ngOnInit() {
  }

  deleteUser(userid:number){
    const url = `https://reqres.in/api/users/${userid}`;       
    let options = {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }
    return this.http.delete(url)
    .subscribe(response => {
        
        this.modal.close();
    });
  }
}