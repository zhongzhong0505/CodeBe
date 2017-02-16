import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';

import { HomeComponent } from './home.component';
import { CkeditorDemoComponent } from '../ckeditor-demo/ckeditor-demo.component';
import { homeRoutes } from './home.routes'; 

@NgModule({
  declarations: [
      HomeComponent,
      CkeditorDemoComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    CKEditorModule,
    RouterModule.forChild(homeRoutes)
  ],
})
export class HomeModule { }
