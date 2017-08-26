import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from './_services/register.service';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../../app.route';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})


export class RegisterComponent implements OnInit {
  // paramètre du formulaire et erreur à afficher au cas ou le formulaire est mal rempli
  registerForm: FormGroup;
  name: FormControl;
  firstname: FormControl;
  password: FormControl;
  address: FormControl;
  email: FormControl;
  errors: string;

  // il faudra ajouter les validator et la vérif des patterns


  constructor(private registerService: RegisterService, fb: FormBuilder) {
    // ici on constitue le formulaire dont la valeur sera envoyé en requête après contrôle
    const namePattern = '[A-Za-z]{2,100}';
    const firstnamePattern = '[A-Za-z]{2,100}';
    const passWordPattern = '[a-zA-Z0-9_]{6,255}';
    const addressPattern = '[a-zA-Z0-9_ ]{10,100}';
    const emailPattern = '^[a-z0-9!#$%&\'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$';
    this.name = fb.control('', [Validators.required, Validators.maxLength(100), Validators.pattern(namePattern)]),
      this.firstname = fb.control('', [Validators.required, Validators.maxLength(100), Validators.pattern(firstnamePattern)]),
      this.password = fb.control('', [Validators.required, Validators.maxLength(255), Validators.pattern(passWordPattern)]),
      this.address = fb.control('', [Validators.required, Validators.maxLength(100), Validators.pattern(addressPattern)]),
      this.email = fb.control('', [Validators.required, Validators.maxLength(100), Validators.pattern(emailPattern)]),
      this.registerForm = fb.group({
        name: this.name,
        firstname: this.firstname,
        password: this.password,
        address: this.address,
        email: this.email,
      });
  }

  // il faudra ajouter des conditions ternaires
  createUser() {
    // ici on  envoie les données de formulaires au constructeur
    const name = this.name.valid ? this.name.value : null;
    const firstname = this.firstname.valid ? this.firstname.value : null;
    const password = this.password.valid ? this.password.value : null;
    const address = this.address.valid ? this.address.value : null;
    const email = this.email.valid ? this.email.value : null;
    const errors = this.errors = '';
    const that = this;
    if (name == null) {
      that.errors += 'votre nom contient des caractères non autorisés \n ';
    }
    if (firstname == null) {
      that.errors += 'votre prénom contient des caractères non autorisés \n ';
    }
    if (email == null) {
      that.errors += 'votre email contient des caractères non autorisés \n ';
    }
    if (address == null) {
      that.errors += 'votre adresse contient des caractères non autorisés \n ';
    }

    console.log(name + firstname + password + email + address);
    // si tous les champs sont remplis, l'objet utilisateur que constitue la valeur du formulaire est envoyé
    // l'id et la date de création seront ajoutés côté serveur ou au nv de la BDD
    if (name && password && address && email) {
      console.log(this.registerForm.value);
      this.registerService.sendData(this.registerForm.value);
      that.errors = null;
    } else {
      that.errors += 'tous les champs sont nécessaires'
    }
  }
  ngOnInit() {
  }
}

