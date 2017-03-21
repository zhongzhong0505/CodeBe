import { Component, OnInit,Input } from '@angular/core';
declare var AmCharts: any;

@Component({
  selector: 'app-amchart',
  templateUrl: './amchart.component.html',
  styleUrls: ['./amchart.component.css']
})
export class AmchartComponent implements OnInit {
  @Input() id: string;
  @Input() options: {};
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      AmCharts.makeChart(this.id,this.options);
    },20);
  }

}
