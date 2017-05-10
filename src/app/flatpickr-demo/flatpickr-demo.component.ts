import { Component, OnInit ,AfterViewInit,ViewChild} from '@angular/core';
import * as Flatpickr from 'flatpickr';
declare var $ : any;

@Component({
  selector: 'app-flatpickr-demo',
  templateUrl: './flatpickr-demo.component.html',
  styleUrls: ['./flatpickr-demo.component.css']
})
export class FlatpickrDemoComponent implements OnInit,AfterViewInit {
  
  @ViewChild("myFlatPickr") pickr;
  constructor() { }

  ngOnInit() {
    console.log(Flatpickr);
  }
  ngAfterViewInit(){
    new Flatpickr(this.pickr.nativeElement,{
      enableTime:true  //可以选择时间
    });
  }
}
