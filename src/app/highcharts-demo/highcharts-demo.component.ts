import { Component, OnInit } from '@angular/core';
import { Ng2Highcharts, Ng2Highmaps, Ng2Highstocks } from 'ng2-highcharts';

import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-highcharts-demo',
  templateUrl: './highcharts-demo.component.html',
  styleUrls: ['./highcharts-demo.component.css'],
  animations:[flyIn]
})
export class HighchartsDemoComponent implements OnInit {
  chartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  };

  chartOptions2 = {
    chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: 'Chart rotation demo'
    },
    subtitle: {
      text: 'Test options by dragging the sliders below'
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
  };

  chartOptions3 = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Browser market shares at a specific website, 2014'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        {
          name: 'Chrome',
          y: 12.8,
          sliced: true,
          selected: true
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
      ]
    }]
  };
  constructor() { }

  ngOnInit() {
  }

}
