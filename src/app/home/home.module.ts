import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { HomeComponent } from './home.component';
import { CkeditorDemoComponent } from '../ckeditor-demo/ckeditor-demo.component';
import { HighchartsDemoComponent } from '../highcharts-demo/highcharts-demo.component';
import { MarkdownDemoComponent } from '../markdown-demo/markdown-demo.component';
import { MdEditorComponent } from '../markdown-demo/md-editor/md-editor.component';
import { AmapDemoComponent } from '../amap-demo/amap-demo.component';
import { AmapComponent } from '../amap-demo/amap/amap.component';
import { GridDemoComponent } from '../grid-demo/grid-demo.component';
import { GridComponent } from '../grid-demo/grid/grid.component';

import { homeRoutes } from './home.routes';
@NgModule({

  declarations: [
    HomeComponent,
    CkeditorDemoComponent,
    HighchartsDemoComponent,
    MarkdownDemoComponent,
    MdEditorComponent,
    AmapDemoComponent,
    AmapComponent,
    GridComponent,
    GridDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
    Ng2HighchartsModule,
    ToastModule.forRoot(),
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
