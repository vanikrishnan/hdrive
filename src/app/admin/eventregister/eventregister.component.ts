import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomValidator } from './customvalidator';
@Component({
  selector: 'app-eventregister',
  templateUrl: './eventregister.component.html',
  styleUrls: ['./eventregister.component.css']
})
export class EventregisterComponent implements OnInit {
  currentYear;
  currentMonth;
  currentDate;
  eventregister;
  todaydate;
  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.currentDate = today.getDate();
    this.todaydate = this.currentYear + '-' + this.currentMonth + '-' + this.currentDate;
    console.log(this.todaydate);
    this.eventregister = new FormGroup({
      'eventname' :
      new FormControl('', [Validators.required , Validators.maxLength(15) , Validators.minLength(5)]),
      'eventdate' :
      new FormControl( '1997-02-23', CustomValidator.datevalidate )
    });
   }

  ngOnInit() {
  }
  get eventname() {
    return this.eventregister.get('eventname');
  }
  get eventdate() {
    return this.eventregister.get('eventdate');
  }
}
