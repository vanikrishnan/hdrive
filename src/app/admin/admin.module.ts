import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventregisterComponent } from './eventregister/eventregister.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [EventregisterComponent]
})
export class AdminModule { }
