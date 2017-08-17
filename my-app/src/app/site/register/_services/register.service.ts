import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class RegisterService {
  private baseUrl = 'http://localhost:8080';
  private postUrl = this.baseUrl + '/post/user';
  constructor(private http: Http) { }
  sendData(dataPost: Object) {
    const body = JSON.stringify(dataPost);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    console.log(body);
    this.http.post(this.postUrl, body, options)
      .subscribe(user => console.log(user));
  }

}
