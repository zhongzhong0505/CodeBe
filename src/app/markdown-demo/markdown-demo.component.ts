import { Component, OnInit, ViewContainerRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { MdEditorComponent } from './md-editor/md-editor.component';

@Component({
  selector: 'app-markdown-demo',
  templateUrl: './markdown-demo.component.html',
  styleUrls: ['./markdown-demo.component.css'],
})
export class MarkdownDemoComponent implements OnInit, AfterViewInit {


  @ViewChildren(MdEditorComponent)
  items: QueryList<MdEditorComponent>;
  style: any;
  ngAfterViewInit() {
    console.log(this.items);
  }
  constructor() {
  }
  ngOnInit() {
    console.log(this.items);
    this.style = {
      'height.px': window.innerHeight
    }
  }
  save(event) {
    console.log(event);
  }
  setHeight(e) {
    this.style = {
      'height.px': e.target.innerHeight
    };
  }
}
