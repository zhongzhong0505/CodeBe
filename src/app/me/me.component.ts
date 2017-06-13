import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  favorite:any = [{
    text:'游泳',
    value:'1',
    checked:true
  },{
    text:'看电影',
    value:'2',
    checked:true
  }];
  constructor() { }

  ngOnInit() {
  }
  onChange(event,item){
    item.checked = event.target.checked;
  }
}
