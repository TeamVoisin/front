import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { ROUTES } from '../../../../app.route';
@Injectable()
export class LoginService {
  private baseUrl = 'http://localhost:8080';
  private postUrl = this.baseUrl + '/users/login';

  constructor(private http: Http, private router: Router) { }

  sendData(dataPost: Object, callback?: (data) => any) {
    const body = JSON.stringify(dataPost);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(body);
    this.http.post(this.postUrl, body, options).subscribe((data) => {
      if (callback) {
        callback(data);
      }
    });
  }

  sendTokenAndGetUser(token, email: string, callback?: (data) => any) {
    const body = email;
    const userUrl = 'http://localhost:8080/users/user';
    const headers2 = new Headers({ 'Authorization': 'Bearer ' + token });
    this.http.post(userUrl, body, { headers: headers2 })
      .subscribe((data) => {
        if (callback) {
          callback(data);
          this.router.navigateByUrl('');

        }
      });
  }

  checkLogin() {
    if (sessionStorage.getItem('firstname') !== '' && sessionStorage.getItem('token') !== '') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('firstname', '');
    sessionStorage.setItem('email', '');
    this.router.navigateByUrl('');
  }
}

