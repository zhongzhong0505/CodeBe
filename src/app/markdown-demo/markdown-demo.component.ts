import { Component, OnInit, ViewContainerRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { flyIn } from '../animations/fly-in';
import { MdEditorComponent } from './md-editor/md-editor.component';

@Component({
  selector: 'app-markdown-demo',
  templateUrl: './markdown-demo.component.html',
  styleUrls: ['./markdown-demo.component.css'],
  animations: [flyIn]
})
export class MarkdownDemoComponent implements OnInit, AfterViewInit {


  @ViewChildren(MdEditorComponent)
  items: QueryList<MdEditorComponent>;

  ngAfterViewInit() {
    console.log(this.items);
  }
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {
    console.log(this.items);
    this.style = {
      'height.px': window.innerHeight
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
