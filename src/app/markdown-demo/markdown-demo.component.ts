import { Component, OnInit } from '@angular/core';
import * as md from 'markdown-it';
import * as mdSub from 'markdown-it-sub';
import * as mdSup from 'markdown-it-sup';
import * as mdHl from 'markdown-it-highlightjs';

@Component({
  selector: 'app-markdown-demo',
  templateUrl: './markdown-demo.component.html',
  styleUrls: ['./markdown-demo.component.css']
})
export class MarkdownDemoComponent implements OnInit {
  title: string ="";
  markdownText: string="# markdown ";
  private renderer = md();
  constructor() { }

  ngOnInit() {
    this.renderer
      .use(mdSub)
      .use(mdSup)
      .use(mdHl);
  }

  preview(): string{
    return this.renderer.render(this.markdownText);
  }

  save(){
    if(this.title){
      localStorage.setItem(this.title,this.markdownText);
    }else{
      //....
    }
  }
}
