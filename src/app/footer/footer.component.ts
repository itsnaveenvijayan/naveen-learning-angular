import { Component, OnInit } from '@angular/core';
import * as url from '../shared/serviceurls';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  url: string;
  constructor() { 
    this.url = url;
  }

  ngOnInit() {
  }

}