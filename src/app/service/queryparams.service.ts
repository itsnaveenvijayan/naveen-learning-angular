import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QueryparamsService {

  param: string;
  constructor(private route: ActivatedRoute) { 

  }

  Get = (param: string): string => {
    

     this.route.queryParams
      .filter(params => params[param])
      .subscribe(params => {        
        this.param = params[param];        
      });
      return this.param;
  }


}