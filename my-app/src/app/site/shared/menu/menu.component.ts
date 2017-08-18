import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './_services/login.service';
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
    console.log(this.loginForm.value);
    this.loginService.sendData(this.loginForm.value);
  }else {
  this.errors = 'Tous les champs sont nécessaires';
}
  }

ngOnInit() {
}

}
