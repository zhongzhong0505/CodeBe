import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

export const appRoutes=[
	{
		path:'',
		redirectTo:"login",
		pathMatch:"full"
	},
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:"home",
		loadChildren:'./home/home.module#HomeModule'
	},
	{
		path:'**',//fallback router must in the last
		redirectTo:"home"
	}
];
