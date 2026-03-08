import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Counter } from './components/counter/counter';
import { Multiplier } from './components/multiplier/multiplier';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'counter', component: Counter },
  { path: 'multiplier', component: Multiplier },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
