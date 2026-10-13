/*
File: app.ts
Author: Tóth Gergely
Copyright: 2026, Tóth Gergely
Group: Szoft II/N
Date: 2026-10-13
Github: https://github.com/togethHUN/
Licenc: MIT
*/



import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RhombusComponent } from './rhombus/rhombus.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rombusz', component: RhombusComponent },
];
