import { Component, OnInit, Input ,ElementRef} from '@angular/core';
declare var MathJax :any;

@Component({
  selector: 'app-mathjax',
  templateUrl: './mathjax.component.html',
  styleUrls: ['./mathjax.component.css']
})
export class MathjaxComponent implements OnInit {
  @Input() exp: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.innerHTML = this.exp;
    MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement]);
  }

}
