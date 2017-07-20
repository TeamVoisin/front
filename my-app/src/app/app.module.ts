import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResultsModule } from './site/results/results.module';
import { HomeModule } from './site/home/home.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RegisterModule } from './site/register/register.module';
import { SharedModule } from './site/shared/shared.module';
import { CreationAnnonceModule } from './site/creation-annonce/creation-annonce.module';
import { ROUTES} from './app.route';
import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AlertModule.forRoot(), CreationAnnonceModule, BrowserModule, HomeModule, ResultsModule,
    RegisterModule, RouterModule.forRoot(ROUTES), SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
