import { HomeComponent } from './home.component'; 

import { CkeditorDemoComponent } from '../ckeditor-demo/ckeditor-demo.component';

export const homeRoutes=[
	{
		path:'',
		component:HomeComponent,
		children:[{
			path:'ckeditor',
			component:CkeditorDemoComponent
    	}]
	}
];
