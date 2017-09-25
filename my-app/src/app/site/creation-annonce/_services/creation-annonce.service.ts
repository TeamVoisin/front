import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { ROUTES } from '../../../app.route';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CreationAnnonceService {
  constructor(private http: Http , private router: Router) { }
  sendData(token, dataForm: object, callback?: (data) => any) {
    const body = JSON.stringify(dataForm);
    console.log(body);
    const articleUrl = 'http://localhost:8080/articles/article';
    const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    this.http.post(articleUrl, body, options)
      .subscribe((data) => {
        if (callback) {
          callback(data);
        }
        alert(data['_body']);
      });
      this.router.navigate(['/creation-annonce']);
  }

  getListResults(token, email: string, callback?: (data) => any) {
    const body = email;
    console.log(body);
    const articleUrl = 'http://localhost:8080/articles/getList';
    const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    this.http.post(articleUrl, body, options)
      .subscribe((data) => {
        if (callback) {
          callback(data);
          console.log(data)
        }
      });

  }
  deleteArticle(token, id: any, callback?: (data) => any) {
    const deleteUrl = 'http://localhost:8080/articles/' + id;
    const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    const options = new RequestOptions({ headers: headers });
    this.http.delete(deleteUrl, options).subscribe(data => {
      if (callback) {
        callback(data);
        console.log(data);
        this.router.navigate(['/creation-annonce']);
      }
      alert('tout est bien supprimé');

    });
  }

  updateArticle(token, id: any, callback?: (data) => any) {
    const updateUrl = 'http://localhost:8080/articles/update';
    const body = id;
    const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    this.http.post(updateUrl, id, options).subscribe(data => {
      if (callback) {
        callback(data);
        console.log(data);
      }
      this.router.navigate(['/creation-annonce']);
      alert('mise à jour effectué');
    });
  }


}
