import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    this.headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    this.headers.append('Content-Type', 'application/json');

  }

  fechData() {
      return this.http.get('assets/data/hotels.json');
  }

  success() {
    return 'Successful';
  }
}
