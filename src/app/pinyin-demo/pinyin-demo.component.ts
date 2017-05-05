import { Component, OnInit } from '@angular/core';
import * as pinyin from 'pinyin';

@Component({
  selector: 'app-pinyin-demo',
  templateUrl: './pinyin-demo.component.html',
  styleUrls: ['./pinyin-demo.component.css']
})
export class PinyinDemoComponent implements OnInit {

  constructor() { }
  text1 = "钟钟";
  text2 = "钟钟的首字母";
  text3 = "";
  text4 = "";
  ngOnInit() {
    this.text3 = pinyin(this.text1);
    this.text4 = pinyin(this.text2, {
      style: pinyin.STYLE_FIRST_LETTER
    });
  }

}
