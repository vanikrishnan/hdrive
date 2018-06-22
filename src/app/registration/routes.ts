
import { Route } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
<<<<<<< HEAD
import {LoginComponent}from './pages/login/login.component';

export const route: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
=======
export const route: Route[] = [
>>>>>>> 2ebf7701844fbba5668ed044a5f6848ba26c0d2f
    {
      path: '',
      component: LandingpageComponent,
    }
    
];
