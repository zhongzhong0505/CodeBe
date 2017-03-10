import { Component, OnInit ,Input,ElementRef,ViewChild} from '@angular/core';
import 'fullcalendar';
import { Options } from 'fullcalendar';
import * as $ from 'jquery';

@Component({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls:["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
    @Input() options: Options;
    @ViewChild('calendar') calendar: ElementRef

    constructor() { }

    ngOnInit() { 
        $(this.calendar.nativeElement).fullCalendar(this.options);
    }

}