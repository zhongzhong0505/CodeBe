import { HomeComponent } from './home.component'; 

import { CkeditorDemoComponent } from '../ckeditor-demo/ckeditor-demo.component';
import { HighchartsDemoComponent } from '../highcharts-demo/highcharts-demo.component';


export const homeRoutes=[
	{
		path:'',
		component:HomeComponent,
		children:[{
			path:"",
			component:CkeditorDemoComponent
		},{
			path:'ckeditor',
			component:CkeditorDemoComponent
    	},{
			path:"highcharts",
			component:HighchartsDemoComponent
		}]
	}
];
