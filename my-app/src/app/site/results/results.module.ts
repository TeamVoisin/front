import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {MapModule} from '../map/map.module';
@NgModule({
  imports: [FormsModule , ButtonsModule,
    CommonModule, MapModule

  ],
  declarations: [ResultsComponent]
})
export class ResultsModule { }
