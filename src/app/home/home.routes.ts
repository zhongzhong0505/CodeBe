import {HomeComponent} from './home.component';

import {CkeditorDemoComponent} from '../ckeditor-demo/ckeditor-demo.component';
import {MarkdownDemoComponent} from '../markdown-demo/markdown-demo.component';
import {AmapDemoComponent} from '../amap-demo/amap-demo.component';
import {GridDemoComponent} from '../grid-demo/grid-demo.component';
import {ZtreeDemoComponent} from '../ztree-demo/ztree-demo.component';
import {MathjaxDemoComponent} from '../mathjax-demo/mathjax-demo.component';
import {MeComponent} from '../me/me.component';

export const homeRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: "",
        redirectTo: "ckeditor"
      }, {
        path: 'ckeditor',
        component: CkeditorDemoComponent
      }, {
        path: "markdown",
        component: MarkdownDemoComponent
      }, {
        path: "amap",
        component: AmapDemoComponent
      }, {
        path: "grid",
        component: GridDemoComponent
      }, {
        path: "ztree",
        component: ZtreeDemoComponent
      }, {
        path: 'mathjax',
        component: MathjaxDemoComponent
      }, {
        path: 'me',
        component: MeComponent
      }
    ]
  }
];
