import { Component, OnInit ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-mathjax-demo',
  templateUrl: './mathjax-demo.component.html',
  styleUrls: ['./mathjax-demo.component.css']
})
export class MathjaxDemoComponent implements OnInit {
  exp = `When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$`;
  constructor() { }

  ngOnInit() {
  }

}
