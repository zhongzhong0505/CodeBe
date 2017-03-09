import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    height: 'parent',
    fixedWeekCount: false,
    defaultDate: '2017-03-09',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: this.events,
    eventClick: (calEvent, jsEvent, view) => {
      console.log(calEvent, jsEvent, view);
      this.toastr.success(calEvent.title, '你点击了这个事件：');
      console.log(view.calendar);
    }
  };
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

}
