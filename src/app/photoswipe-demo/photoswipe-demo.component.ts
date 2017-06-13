import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
declare var PhotoSwipe :any;
declare var PhotoSwipeUI_Default :any;

@Component({
  selector: 'app-photoswipe-demo',
  templateUrl: './photoswipe-demo.component.html',
  styleUrls: ['./photoswipe-demo.component.css']
})
export class PhotoswipeDemoComponent implements OnInit {
  @ViewChild('pswp') pswp: ElementRef
  constructor() { }

  ngOnInit() {
    
  }

  openSwipe(){
    var pswpElement = this.pswp.nativeElement;//document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
      {
        src: 'https://raw.githubusercontent.com/zhongzhong0505/ng2-demo/master/images/1.jpg',
        w: 600,
        h: 400
      },
      {
        src: 'https://raw.githubusercontent.com/zhongzhong0505/ng2-demo/master/images/2.jpg',
        w: 1200,
        h: 900
      }
    ];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  }
}
