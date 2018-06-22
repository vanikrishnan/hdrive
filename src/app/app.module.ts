import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.routes';
import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { LandingpageComponent } from './registration/pages/landingpage/landingpage.component';
<<<<<<< HEAD
import { RouterModule , Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
=======
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
>>>>>>> 2ebf7701844fbba5668ed044a5f6848ba26c0d2f


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RegistrationModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild( routes )
=======
    AdminModule,
    RouterModule.forRoot( routes )
>>>>>>> 2ebf7701844fbba5668ed044a5f6848ba26c0d2f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
