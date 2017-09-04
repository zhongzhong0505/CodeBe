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
    }, {
      title: "重要事件",
      start: '2017-03-16',
      type: 1
    }
  ];
  calendarOptions: Object = {
    events: this.events
  };
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  eventRender({ event, element }) {
    if (1 === event.type) {
      element.css('backgroundColor', '#C93A36');
      element.css('border', '1px solid #C93A36');
    }
  }
  eventClick({ calEvent, jsEvent, view }) {
    console.log(calEvent, jsEvent, view);
  }
  dayClick({ date,jsEvent,view }) {
    console.log(date,jsEvent,view);
  }

  ngOnInit() {
  }

}
