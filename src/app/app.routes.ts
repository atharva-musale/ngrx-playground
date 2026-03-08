import { Routes } from '@angular/router';
import { CounterPageComponent, HomeComponent, MultiplierComponent } from './pages';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterPageComponent },
  { path: 'multiplier', component: MultiplierComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
