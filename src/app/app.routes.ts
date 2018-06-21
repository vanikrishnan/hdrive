
import { Routes} from '@angular/Router';
export const routes: Routes = [
    {
      path: '',
      loadChildren: 'app/registration/registration.module#RegistrationModule'
    }
];
