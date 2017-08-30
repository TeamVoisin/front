
import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ResultService {
    constructor(private http: Http) { }
        getListResults() {
            const userUrl = 'http://localhost:8080/articles';
            const headers2 = new Headers({'Content-Type' : 'application/json'});
            return this.http.get(userUrl, {headers: headers2});
          }

    }
