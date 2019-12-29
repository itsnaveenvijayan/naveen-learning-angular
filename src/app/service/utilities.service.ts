import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn : "root"
})
export class UtilitiesService {

  constructor(private route: ActivatedRoute) { }

  GetQueryString = (param: string): string => {
    
    let result: string

     this.route.queryParams
      .filter(params => params[param])
      .subscribe(params => {        
        result = params[param];        
      });
      return result;
  }

  QueryStringToJSON = (input: string) => {            
    let pairs = input.slice(1).split('&');
    
    let result = {};
    pairs.forEach((pair) => {
        let pr = pair.split('=');
        result[pr[0]] = decodeURIComponent(pr[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
  }

}