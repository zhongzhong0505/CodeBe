import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import 'fullcalendar';
import { Options } from 'fullcalendar';
import * as $ from 'jquery';

@Component({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
    private defaultOptions: Options;
    @Input() options: Options = {};
    @ViewChild('calendar') calendar: ElementRef;
    @Output() eventRender = new EventEmitter();
    @Output() dayClick = new EventEmitter();
    @Output() eventClick = new EventEmitter();

    constructor() {
        this.defaultOptions = {
            height: 'parent',
            header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
            },
            locale: 'zh-cn',
            buttonText:{
                today:'今天',
                month:'月',
                agendaWeek:'周',
                agendaDay:'日',
            },
            fixedWeekCount: false,
            defaultDate: new Date(),
            editable: true,
            eventLimit: true, 
            eventRender: (event, element) => {
                this.eventRender.emit({event, element});
            },
            dayClick: (date, jsEvent, view) =>{
                this.dayClick.emit({
                    date,
                    jsEvent,
                    view
                });
            },
            eventClick: (calEvent, jsEvent, view)=>{
                this.eventClick.emit({
                    calEvent,
                    jsEvent,
                    view
                });
            }
        };
    }

    ngOnInit() {
        if(this.options.hasOwnProperty('eventRender')){
            delete this.options.eventRender;
        }
        if(this.options.hasOwnProperty('dayClick')){
            delete this.options.dayClick;
        }
        if(this.options.hasOwnProperty('eventClick')){
            delete this.options.eventClick;
        }
        this.options = Object.assign(this.defaultOptions, this.options);
        $(this.calendar.nativeElement).fullCalendar(this.options);
    }

}