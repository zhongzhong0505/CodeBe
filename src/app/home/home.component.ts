import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  logout() {
    // 清空登录信息
    //....
    console.log("退出登录");
    //跳转到登录页面
    this.router.navigate(["login"]);
  }
}
