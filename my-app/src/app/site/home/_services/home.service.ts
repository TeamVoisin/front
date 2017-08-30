import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {
    constructor(private http: Http) { }
    getListResults(dataForm) {
        const body = dataForm;
        const userUrl = 'http://localhost:8080/articles/search';
        const headers = new Headers({'Content-Type' : 'application/json'});
        const options = new RequestOptions({ headers: headers });


        return this.http.post(userUrl, body , options );
      }
}
