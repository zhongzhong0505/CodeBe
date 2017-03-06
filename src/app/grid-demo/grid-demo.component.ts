import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.css'],
  animations:[flyIn]
})
export class GridDemoComponent implements OnInit {
  public data:any = {
    "columns": [{
      "title": "用户名",
      "field": "username"
    }, {
      "title": "邮箱",
      "field": "email"
    }],
    "rows": [{
      "username": "****",
      "email": "XXX@qq.com"
    }, {
      "username": "钟钟",
      "email": "XXX@qq.com"
    }, {
      "username": "钟钟",
      "email": "XXX@qq.com"
    }, {
      "username": "钟钟",
      "email": "XXX@qq.com"
    }, {
      "username": "钟钟",
      "email": "XXX@qq.com"
    }, {
      "username": "钟钟",
      "email": "XXX@qq.com"
    }, {
      "username": "钟钟",
      "email": "XXX@qq.com"
    }, {
      "username": "钟钟",
      "email": "XXX@qq.com"
    }]
  };

  public data2:any = {
    "columns": [{
      "title": "列1",
      "field": "col1"
    }, {
      "title": "列2",
      "field": "col2"
    }],
    "rows": [{
      "col1": "**等待**",
      "col2": "XXX@qq.com"
    }, {
      "col1": "钟钟",
      "col2": "XXX@qq.com"
    }, {
      "col1": "钟钟",
      "col2": "XXX@qq.com"
    }, {
      "col1": "钟钟",
      "col2": "XXX@qq.com"
    }, {
      "col1": "钟钟",
      "col2": "XXX@qq.com"
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
