import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import {route} from './routes';
import { AdminregistrationComponent } from './pages/adminregistration/adminregistration.component';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(route)
  ],
  declarations: [LandingpageComponent, AdminregistrationComponent]
})
export class RegistrationModule { }
