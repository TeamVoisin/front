import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
// utiliser dans le component
// constitue une requete http vers le serveur qui poste les infos permettant de créer un utilisateur
// une requête post est constitué d'une url, d'un corps, et d'options éventuels, ici on y place une entête
export class RegisterService {
  private baseUrl = 'http://localhost:8080';
  private postUrl = this.baseUrl + '/users';
  constructor(private http: Http) { }
  sendData(dataPost: Object) {
    const body = JSON.stringify(dataPost);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(body);
    this.http.post(this.postUrl, body, options)
      .subscribe(user => console.log(user));
  }

}
