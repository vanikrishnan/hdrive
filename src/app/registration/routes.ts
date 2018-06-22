
import { Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { AdminregistrationComponent } from './pages/adminregistration/adminregistration.component';

export const route: Routes = [
    {
      path: '',
      component: LandingpageComponent,
    },
    {
      path: 'adminreg',
      component: AdminregistrationComponent,
    }
];
