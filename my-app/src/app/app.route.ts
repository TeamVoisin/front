import { Routes } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { RegisterComponent } from './site/register/register.component';
import { CreationAnnonceComponent } from './site/creation-annonce/creation-annonce.component';
import { ResultsComponent } from './site/results/results.component';
export const ROUTES: Routes = [
    { path: "", component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'creation-annonce', component: CreationAnnonceComponent },
    { path: 'results', component: ResultsComponent }
    
];