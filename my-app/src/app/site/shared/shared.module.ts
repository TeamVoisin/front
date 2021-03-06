import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../../app.route';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CollapseModule.forRoot(), FormsModule , HttpModule , ReactiveFormsModule ,
  ButtonsModule.forRoot(), CommonModule, RouterModule.forRoot(ROUTES), BsDropdownModule.forRoot()

  ],
  declarations: [MenuComponent, FooterComponent ],
  exports: [MenuComponent, FooterComponent ]
})
export class SharedModule { }
