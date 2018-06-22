import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventregisterComponent } from './eventregister/eventregister.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { route } from '../admin/routeevent';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ],
  declarations: [EventregisterComponent]
})
export class AdminModule { }
