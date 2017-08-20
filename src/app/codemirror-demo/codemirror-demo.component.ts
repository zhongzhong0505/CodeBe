import { Component, OnInit ,ViewChild ,ElementRef } from '@angular/core';
import * as CodeMirror from 'codemirror';

@Component({
  selector: 'app-codemirror-demo',
  templateUrl: './codemirror-demo.component.html',
  styleUrls: ['./codemirror-demo.component.css']
})
export class CodemirrorDemoComponent implements OnInit {
  @ViewChild('codemirrorTextarea') codemirrorTextarea: ElementRef;
  constructor() { }

  ngOnInit() {
    CodeMirror.fromTextArea(this.codemirrorTextarea.nativeElement,{
      lineNumbers: true,
      mode:  "javascript"
    });
  }

}
