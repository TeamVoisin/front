import {Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
  imports: [
    CommonModule, FormsModule , ReactiveFormsModule , HttpModule
  ],
  declarations: [RegisterComponent ]
})
export class RegisterModule { }
