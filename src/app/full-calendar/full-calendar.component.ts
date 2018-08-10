import { Component, OnInit } from '@angular/core';
import * as FullCalendar from 'fullcalendar';
declare var $: any;
@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let calendar = new FullCalendar.Calendar($("#calendar"), {
      // weekends: false
    });
    // $("#calendar").data('fullCalendar', calendar);
    calendar.render()
  }
}
