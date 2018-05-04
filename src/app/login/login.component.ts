import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, vcr: ViewContainerRef) {
    
  }

  ngOnInit() {
  }

  login() {
    setTimeout(() => {
      this.router.navigateByUrl("home");
    }, 2000)
  }
}
