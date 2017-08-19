import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { HomeComponent } from './home.component';
import { CkeditorDemoComponent } from '../ckeditor-demo/ckeditor-demo.component';
import { MarkdownDemoComponent } from '../markdown-demo/markdown-demo.component';
import { MdEditorComponent } from '../markdown-demo/md-editor/md-editor.component';
import { AmapDemoComponent } from '../amap-demo/amap-demo.component';
import { AmapComponent } from '../amap-demo/amap/amap.component';
import { GridDemoComponent } from '../grid-demo/grid-demo.component';
import { GridComponent } from '../grid-demo/grid/grid.component';
import { CalendarDemoComponent } from '../calendar-demo/calendar-demo.component';
import { CalendarComponent } from '../calendar-demo/calendar/calendar.component';
import { ZtreeDemoComponent } from '../ztree-demo/ztree-demo.component';
import { JsplumbDemoComponent } from '../jsplumb-demo/jsplumb-demo.component';
import { MathjaxDemoComponent } from '../mathjax-demo/mathjax-demo.component';
import { MathjaxComponent } from '../mathjax-demo/mathjax/mathjax.component';
import { MeComponent } from '../me/me.component';

import { homeRoutes } from './home.routes';
@NgModule({

  declarations: [
    HomeComponent,
    CkeditorDemoComponent,
    MarkdownDemoComponent,
    MdEditorComponent,
    AmapDemoComponent,
    AmapComponent,
    GridComponent,
    GridDemoComponent,
    CalendarComponent,
    CalendarDemoComponent,
    ZtreeDemoComponent,
    JsplumbDemoComponent,
    MathjaxDemoComponent,
    MathjaxComponent,
    MeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
    ToastModule.forRoot(),
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
