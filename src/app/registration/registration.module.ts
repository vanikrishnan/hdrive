import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import {route} from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [LandingpageComponent]
})
export class RegistrationModule { }
