import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-bootstrap-table-demo',
  templateUrl: './bootstrap-table-demo.component.html',
  styleUrls: ['./bootstrap-table-demo.component.css']
})
export class BootstrapTableDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#mytable").bootstrapTable({
      width: 600,
      height:500,
      showRefresh:true,
      showColumns:true,
      columns: [{
        checkbox: true
      }, {
        field: "userName",
        title: "用户名",
        editable: true,
        sortable: true
      }, {
        field: "email",
        title: "邮箱",
        editable: true,
        sortable: true
      }],
      data:[{
        userName:'钟钟',
        email:'zhongzhong@asloop.com'
      },{
        userName:'钟钟',
        email:'zhongzhong@asloop.com'
      },{
        userName:'钟钟',
        email:'zhongzhong@asloop.com'
      },{
        userName:'钟钟',
        email:'zhongzhong@asloop.com'
      }]
    });
  }

}
