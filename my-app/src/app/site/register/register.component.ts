import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from './_services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})


export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  name: FormControl;
  firstname: FormControl;
  password: FormControl;
  address: FormControl;
  email: FormControl;
  private errors: string;
  private userData: any;
  // il faudra ajouter les validator et la vérif des patterns
  constructor(private registerService: RegisterService, fb: FormBuilder) {
         this.name = fb.control(''),
      this.firstname = fb.control(''),
      this.password = fb.control(''),
      this.address = fb.control(''),
      this.email = fb.control(''),
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
    const name = this.name.value;
    const firstname = this.firstname.value;
    const password = this.password.value;
    const address = this.address.value;
    const email = this.email.value;
    const that = this;
    const action = (data: Object) => {
      that.userData = data;
    }
    if (name && password && address && email) {
      console.log(this.registerForm.value);
      this.registerService.sendData(this.registerForm.value);
    }else {
      this.errors = 'ola il manque des chanps';
    }
  }
  ngOnInit() {
  }
}

