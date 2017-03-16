import { Component, OnInit } from '@angular/core';
import 'jquery';
// import 'ztree';
declare var jQuery: any;

@Component({
  selector: 'app-ztree-demo',
  templateUrl: './ztree-demo.component.html',
  styleUrls: ['./ztree-demo.component.css']
})
export class ZtreeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(jQuery);
    
  }

}
