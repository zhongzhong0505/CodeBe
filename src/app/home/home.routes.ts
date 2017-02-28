import { HomeComponent } from './home.component'; 

import { CkeditorDemoComponent } from '../ckeditor-demo/ckeditor-demo.component';
import { HighchartsDemoComponent } from '../highcharts-demo/highcharts-demo.component';
import { MarkdownDemoComponent } from '../markdown-demo/markdown-demo.component';
import { AmapDemoComponent } from '../amap-demo/amap-demo.component';

export const homeRoutes=[
	{
		path:'',
		component:HomeComponent,
		children:[{
			path:"",
			redirectTo:"ckeditor"
			// component:CkeditorDemoComponent
		},{
			path:'ckeditor',
			component:CkeditorDemoComponent
    	},{
			path:"highcharts",
			component:HighchartsDemoComponent
		},{
			path:"markdown",
			component:MarkdownDemoComponent
		},{
			path:"amap",
			component:AmapDemoComponent
		}]
	}
];
