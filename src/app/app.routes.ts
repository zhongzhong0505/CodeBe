import { AppComponent } from './app.component';

export const appRoutes=[
	{
		path:'',
		redirectTo:"home",
		pathMatch:"full"
	},
	{
		path:"home",
		loadChildren:'./home/home.module#HomeModule'
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'./home/home.module#HomeModule'
	}
];
