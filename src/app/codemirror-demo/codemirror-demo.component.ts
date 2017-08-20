import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import * as CodeMirror from 'codemirror';

@Component({
  selector: 'app-codemirror-demo',
  templateUrl: './codemirror-demo.component.html',
  styleUrls: ['./codemirror-demo.component.css']
})
export class CodemirrorDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('codemirrorTextarea') codemirrorTextarea: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    CodeMirror.fromTextArea(this.codemirrorTextarea.nativeElement, {
      lineNumbers: true,
      mode: "javascript",
      matchBrackets: true
    });
  }
}
