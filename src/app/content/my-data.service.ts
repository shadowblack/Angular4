import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*import * as http from "http";*/

@Injectable()
export class MyDataService {

  private headers: Headers;


  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    this.headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    this.headers.append('Content-Type', 'application/json');

  }

  stars: {};
  fechData() {
    (function(http, self){
      http.get('assets/data/hotels.json').subscribe(
        (res: Response) =>  {
          const hotels = res.json();
          self.stars = "10";
        }
      );
    })(this.http, this);
   // this.http.get('http://localhost:3000').map((res: Response) => res.json());
  }

  success() {
    return 'Successful';
  }
}
