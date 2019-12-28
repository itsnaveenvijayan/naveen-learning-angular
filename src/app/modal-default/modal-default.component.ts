import { Component, OnInit , Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../shared/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import $ from 'jquery'

@Component({
  selector: 'app-modal-default',
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.css']
})
export class ModalDefaultComponent implements OnInit  {
  
  @Input() user: User;
  myForm: FormGroup;

  constructor(private activeModal: NgbActiveModal, public http: HttpClient,private formBuilder: FormBuilder) {
    
  }  

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(){

  }

  saveUser = (e: Event): any => {
    
    const url = `https://reqres.in/api/users`;       
    let options = {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }
    return this.http.patch<Observable<any>>(url,this.QueryStringToJSON($(e.target).serialize()),options)
    .subscribe(response => {
        console.log(response);
        
        this.activeModal.close();
    });
    
   }

  
  QueryStringToJSON(input: string) {            
    let pairs = input.slice(1).split('&');
    
    let result = {};
    pairs.forEach((pair) => {
        let pr = pair.split('=');
        result[pr[0]] = decodeURIComponent(pr[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
  }
}