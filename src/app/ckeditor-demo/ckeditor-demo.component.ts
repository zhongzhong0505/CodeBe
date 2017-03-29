import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-ckeditor-demo',
  templateUrl: './ckeditor-demo.component.html',
  styleUrls: ['./ckeditor-demo.component.css'],
  animations:[flyIn]
})
export class CkeditorDemoComponent implements OnInit {
  ckeditorContent = "";
  constructor() { }
  config={
    filebrowserBrowseUrl :"&&&&&",
    filebrowserUploadUrl :"&&&"
  };
  ngOnInit() {
  }

}
