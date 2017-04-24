import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-date-range-demo',
  templateUrl: './date-range-demo.component.html',
  styleUrls: ['./date-range-demo.component.css']
})
export class DateRangeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('input[name=daterange]').daterangepicker({
      timePicker: true,
      timePickerIncrement: 30,
      locale: {
        format: 'MM/DD/YYYY h:mm A'
      }
    });

    $('input[name=daterange2]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true
    });
  }

}
