import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { flyIn } from '../animations/fly-in';
import { MdEditorComponent } from './md-editor/md-editor.component';

@Component({
  selector: 'app-markdown-demo',
  templateUrl: './markdown-demo.component.html',
  styleUrls: ['./markdown-demo.component.css'],
  animations: [flyIn]
})
export class MarkdownDemoComponent implements OnInit {
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {
    this.style = {
      'height.px':window.innerHeight
    }
  }
  save(event) {
    console.log(event);
    this.toastr.success('保存成功！', '系统提示');
  }
  style: any;
  setHeight(e) {
    this.style = {
      'height.px': e.target.innerHeight
    };
  }
}
