import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';
import { AmapComponent } from './amap/amap.component';

@Component({
  selector: 'app-amap-demo',
  templateUrl: './amap-demo.component.html',
  styleUrls: ['./amap-demo.component.css'],
  animations:[flyIn]
})
export class AmapDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
