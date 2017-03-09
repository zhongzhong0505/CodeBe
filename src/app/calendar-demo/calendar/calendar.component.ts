import { Component, OnInit ,Input,ElementRef} from '@angular/core';
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

    constructor(private element:ElementRef) { }

    ngOnInit() { 
        $(this.element.nativeElement).fullCalendar(this.options);
    }

}