import { HomeComponent } from './home.component'; 

import { CkeditorDemoComponent } from '../ckeditor-demo/ckeditor-demo.component';
import { HighchartsDemoComponent } from '../highcharts-demo/highcharts-demo.component';
import { MarkdownDemoComponent } from '../markdown-demo/markdown-demo.component';
import { AmapDemoComponent } from '../amap-demo/amap-demo.component';
import { GridDemoComponent } from '../grid-demo/grid-demo.component';
import { CalendarDemoComponent } from '../calendar-demo/calendar-demo.component';
import { AmchartsDemoComponent } from '../amcharts-demo/amcharts-demo.component';
import { ZtreeDemoComponent } from '../ztree-demo/ztree-demo.component';

export const homeRoutes=[
	{
		path:'',
		component:HomeComponent,
		children:[{
			path:"",
			redirectTo:"ckeditor"
		},{
			path:'ckeditor',
			component:CkeditorDemoComponent
    	},{
			path:"highcharts",
			component:HighchartsDemoComponent
		},{
			path:"amcharts",
			component:AmchartsDemoComponent
		},{
			path:"markdown",
			component:MarkdownDemoComponent
		},{
			path:"amap",
			component:AmapDemoComponent
		},{
			path:"grid",
			component:GridDemoComponent
		},{
			path:"calendar",
			component:CalendarDemoComponent
		},{
			path:"ztree",
			component:ZtreeDemoComponent
		}]
	}
];
