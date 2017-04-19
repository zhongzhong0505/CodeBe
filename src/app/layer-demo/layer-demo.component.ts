import { Component, OnInit } from '@angular/core';
declare var layer: any;
@Component({
  selector: 'app-layer-demo',
  templateUrl: './layer-demo.component.html',
  styleUrls: ['./layer-demo.component.css']
})
export class LayerDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  alert() {
    layer.alert('hahahaha');
  }
  confirm() {
    layer.confirm('钟钟很帅？', {
      btn: ['是的', '不是']
    }, () => {
      layer.msg('你说的是实话。')
    }, () => {
      layer.msg('请说实话', {
        time: 2000,
        btn: ['明白了', '不明白']
      })
    })
  }
  msg() {
    layer.msg('玩命提示中');
  }
}
