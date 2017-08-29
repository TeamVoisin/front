import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CreationAnnonceService {
    constructor(private http: Http) { }
    sendData(token, dataForm: object, callback?: (data) => any) {
        const body = JSON.stringify(dataForm);
        console.log(body);
        const articleUrl = 'http://localhost:8080/articles/article';
        const headers = new Headers({ 'Authorization': 'Bearer ' + token });
        headers.append('Content-Type' , 'application/json');
        const options = new RequestOptions ({ headers: headers });
        this.http.post(articleUrl, body, options  )
          .subscribe((data) => {
            if (callback) {
              callback(data);
            }
            alert(data['_body']);
          });

      }

      getListResults(token, email: string, callback?: (data) => any) {
        const body = email;
        console.log(body);
        const articleUrl = 'http://localhost:8080/articles/getList';
        const headers = new Headers({ 'Authorization': 'Bearer ' + token });
        headers.append('Content-Type' , 'application/json');
        const options = new RequestOptions ({ headers: headers });
        this.http.post(articleUrl, body, options  )
          .subscribe((data) => {
            if (callback) {
              callback(data);
              console.log(data)
            }
          });

      }
}
