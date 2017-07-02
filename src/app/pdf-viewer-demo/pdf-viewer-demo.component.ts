import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer-demo',
  templateUrl: './pdf-viewer-demo.component.html',
  styleUrls: ['./pdf-viewer-demo.component.css']
})
export class PdfViewerDemoComponent implements OnInit {
  pdfSrc: string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  page: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
