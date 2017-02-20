import { Component, OnInit } from '@angular/core';

import { MdEditorComponent } from './md-editor.component';
@Component({
  selector: 'app-markdown-demo',
  templateUrl: './markdown-demo.component.html',
  styleUrls: ['./markdown-demo.component.css']
})
export class MarkdownDemoComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  save(event){
    console.log(event);
  }
}
