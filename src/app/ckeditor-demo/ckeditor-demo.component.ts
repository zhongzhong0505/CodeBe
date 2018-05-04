import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeditor-demo',
  templateUrl: './ckeditor-demo.component.html',
  styleUrls: ['./ckeditor-demo.component.css']
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
