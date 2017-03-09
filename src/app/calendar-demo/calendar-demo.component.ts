import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-demo',
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.css']
})
export class CalendarDemoComponent implements OnInit {
  events: any[] = [
    {
      title: '整天事件',
      start: '2017-03-11'
    },
    {
      title: '长事件',
      start: '2017-03-11',
      end: '2017-03-15'
    }
  ];
  calendarOptions: Object = {
    height: 'auto',
    fixedWeekCount: false,
    defaultDate: '2017-03-09',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: this.events,
    eventClick: (calEvent, jsEvent, view) => {
      console.log(event, jsEvent, view);
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
