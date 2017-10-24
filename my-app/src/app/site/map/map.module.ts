import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpuov5CcCDJk04BZfJkS0W4aiuIR-BIsE'
    })
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
