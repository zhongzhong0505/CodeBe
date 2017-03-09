import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-demo',
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.css']
})
export class CalendarDemoComponent implements OnInit {
  calendarOptions: Object = {
    height: 'auto',
    fixedWeekCount: false,
    defaultDate: '2017-03-09',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: '整天事件',
        start: '2017-03-11'
      },
      {
        title: '长事件',
        start: '2017-03-11',
        end: '2017-03-15'
      }
    ],
    eventClick:(event, element)=>{
      console.log(event,element);
      
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
