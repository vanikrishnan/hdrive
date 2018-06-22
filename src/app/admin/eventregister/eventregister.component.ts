import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-eventregister',
  templateUrl: './eventregister.component.html',
  styleUrls: ['./eventregister.component.css']
})
export class EventregisterComponent implements OnInit {
  eventregister = new FormGroup({

  });
  constructor() { }

  ngOnInit() {
  }

}
