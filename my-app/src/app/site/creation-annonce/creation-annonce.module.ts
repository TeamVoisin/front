import {Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationAnnonceComponent } from './creation-annonce.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
  imports: [
    CommonModule, FormsModule , ReactiveFormsModule , HttpModule
  ],
  declarations: [CreationAnnonceComponent ]
})
export class CreationAnnonceModule { }

