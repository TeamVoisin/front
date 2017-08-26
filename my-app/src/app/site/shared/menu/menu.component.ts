import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './_services/login.service';
import { User } from '../../register/_models/user'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [LoginService]
})

export class MenuComponent implements OnInit {

  loginForm: FormGroup;
  password: FormControl;
  email: FormControl;
  user: User = null;
  firstname: string;
  token: string;
  private errors: string;
  // il faudra ajouter les validator et la vérif des patterns
  constructor(private loginService: LoginService, fb: FormBuilder) {


    this.password = fb.control(''),
      this.email = fb.control(''),
      this.loginForm = fb.group({
        password: this.password,
        email: this.email,
      });
  }

  // il faudra ajouter des conditions ternaires
  auth() {
    const password = this.password.value;
    const email = this.email.value;

    if (password && email) {
      const that = this ;
      console.log(that.loginForm.value);
      const callback = (data) => {
        const token = ((data)._body);
        sessionStorage.setItem('token', token);
        // on introduit une variable token 
        that.token = this.token;
      };
      // on attend une seconde pour exécuter l'envoi du token ca ne sert à rien mais c'est visuel
      setTimeout(() => { this.loginService.sendData(this.loginForm.value, callback)} , 1000);
      this.envoiToken();
    }}

    // on réclame un prénom pour le stocker en session

    envoiToken() {
      if (sessionStorage.getItem('firstname') === '' && this.token !== '') {
        // pour que la portéé de la variable s'étendent au component on déclare that=this
        const that = this;
        // on déclare un callback qui est une action qui s'effectue au retour de la réponse, ici on balance 
        // le firstname récup dans la session
        const callback2 = (data) => {
          const userJson = ((data)._body);
          that.user = JSON.parse(userJson);
          that.firstname = that.user.firstname;
          sessionStorage.setItem('firstname', that.firstname);
          sessionStorage.setItem('email', that.user.email)
        };
        // on envoie la requete avec ses 3 parametres
        this.loginService.sendTokenAndGetUser(sessionStorage.getItem('token'), this.email.value, callback2);
      } else {
        this.errors = 'Tous les champs sont nécessaires';
      }
    }

    ngOnInit() {sessionStorage.setItem('firstname', '');
    sessionStorage.setItem('token', '');
    }

  }
