import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-select2-demo',
  templateUrl: './select2-demo.component.html',
  styleUrls: ['./select2-demo.component.css']
})
export class Select2DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".my-select2").select2();
    $(".my-select2-1").select2();
  }

}
