import { Component, OnInit } from '@angular/core';
import * as md from 'markdown-it';

@Component({
  selector: 'app-markdown-demo',
  templateUrl: './markdown-demo.component.html',
  styleUrls: ['./markdown-demo.component.css']
})
export class MarkdownDemoComponent implements OnInit {
  markdownText: string="# markdown "
  constructor() { }

  ngOnInit() {
  }

  preview(): string{
    return md().render(this.markdownText);
  }
}
