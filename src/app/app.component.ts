import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(public router: Router){

  }

  ngOnInit(){
    // let user = localStorage.getItem("currentUser");
    // if(user){//已经登录
    //   this.router.navigate(["home"]);
    // }else{//没有登录
    //   this.router.navigate(["login"]);
    // }
  }
}
