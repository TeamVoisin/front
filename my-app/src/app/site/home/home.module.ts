import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Component} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [
    CommonModule, FormsModule , ReactiveFormsModule , HttpModule, ButtonsModule

  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

