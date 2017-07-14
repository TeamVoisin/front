import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule ,  RouterModule.forChild([
 { path: 'results', component: ResultsComponent }
 ])

  ],
  declarations: [ResultsComponent]
})
export class ResultsModule { }
