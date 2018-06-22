import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import {route} from './routes';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
=======
    RouterModule.forChild(route)
>>>>>>> 2ebf7701844fbba5668ed044a5f6848ba26c0d2f
  ],
  declarations: [LandingpageComponent, LoginComponent]
})
export class RegistrationModule { }
