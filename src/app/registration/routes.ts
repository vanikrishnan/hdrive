
import { Routes } from '@angular/Router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import {LoginComponent}from './pages/login/login.component';

export const route: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
    {
      path: '',
      component: LandingpageComponent,
    }
    
];
